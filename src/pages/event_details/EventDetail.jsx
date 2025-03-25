import NotFound from "../not-found/NotFound";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getItemEvents } from "../../services/ListPostNewsPapger";

const EventDetail = ({ dataId }) => {
  const [getData, setGetData] = useState({});
  const [loading, setLoading] = useState(true);
  const [notShow, setNotShow] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState(null);

  useEffect(() => {
    getDataDetails();
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulated loading time
  }, []);

  useEffect(() => {
    if (getData.data?.title) {
      document.title = getData.data.title; // Cập nhật tiêu đề trang
    }
  }, [getData]);

  const getDataDetails = async () => {
    let res = await getItemEvents(dataId);
    if (res.status === 404) {
      setNotShow(true);
    } else {
      setNotShow(false);
      setGetData(res);
    }
  };

  const shareOnFacebook = () => {
    const url = window.location.href;
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}`;
    window.open(facebookShareUrl, "_blank", "noopener,noreferrer");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen  bg-blue-400">
        <motion.div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin " />
      </div>
    );
  }

  if (notShow) {
    return <NotFound />;
  }

  return (
    <div className="bg-blue-400">
      <br />
      <br />
      {notShow === true ? (
        <NotFound />
      ) : (
        <motion.div
          className="flex justify-center items-center min-h-screen  bg-blue-400 p-6 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl w-full text-center"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Trang Chủ</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/events">Sự kiện</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </BreadcrumbList>
            </Breadcrumb>
            <div className="text-left">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {getData.data.title}
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                {getData.data.subtitle}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                🕒 {new Date(getData.data.createdAt).toLocaleDateString()}
              </p>
            </div>
            <button
              onClick={shareOnFacebook}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-700"
            ></button>
            <div className="mt-4 text-left">
              {getData.data.contentnews.split("\n").map((line, index) =>
                line.includes("![") ? (
                  <motion.img
                    key={index}
                    src={line.match(/\((.*?)\)/)[1]}
                    alt="Event"
                    className="w-full h-auto rounded-lg shadow-md my-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    onClick={() =>
                      setFullScreenImage(line.match(/\((.*?)\)/)[1])
                    }
                  />
                ) : (
                  <p key={index} className="text-gray-700 text-base mb-2">
                    {line}
                  </p>
                )
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
      {fullScreenImage && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex justify-center items-center z-50"
          onClick={() => setFullScreenImage(null)}
        >
          <img
            src={fullScreenImage}
            alt="Full Screen"
            className="max-w-full max-h-full"
          />
          <button
            className="absolute top-4 right-4 text-white text-2xl bg-red-500 p-2 rounded-full"
            onClick={() => setFullScreenImage(null)}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default EventDetail;
