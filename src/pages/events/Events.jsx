import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getListEvents } from "../../services/ListPostNewsPapger";
const formatDate = (isoString) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "Asia/Ho_Chi_Minh",
  };
  return new Date(isoString).toLocaleDateString("vi-VN", options);
};

const Events = () => {
  const [loading, setLoading] = useState(true);
  const [listPager, setListPager] = useState([]);

  useEffect(() => {
    document.title = "Sự kiện về đoàn viên thanh niên Việt Nam";
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    getUser();
    return () => clearTimeout(timer);
  }, []);

  const getUser = async () => {
    let res = await getListEvents();
    if (res && res.data) {
      setListPager(res.data);
      //   setListUser(res.data);
    }
  };

  return (
    <div className="bg-blue-500 min-h-screen py-10 px-6">
      <div className="max-w-[1600px] mx-auto">
        <br />
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
            Sự kiện
          </h2>
        </div>
        <br />
        {loading ? (
          <motion.div
            className="flex justify-center items-center h-64"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {listPager.map((news, index) => (
              <a href={`/events_detail/${news.documentId}`}>
                <motion.div
                  key={news.id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={`http://localhost:1337${news.url_title.url}`}
                    alt={news.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-900 overflow-hidden whitespace-nowrap">
                      {news.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-2">
                      {formatDate(news.createdAt)}
                    </p>
                    <p className="text-gray-700 text-sm text-ellipsis overflow-hidden whitespace-nowrap">
                      {news.subtitle}
                    </p>
                  </div>
                </motion.div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
