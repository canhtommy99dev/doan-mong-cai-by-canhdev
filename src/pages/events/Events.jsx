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
    }
  };

  return (
    <div className="min-h-screen py-10 px-6 animate-gradient">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-6xl gradient-text mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Sự kiện nổi bật
          </motion.h2>
          <motion.p
            className="text-white/90 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Khám phá những hoạt động và sự kiện ý nghĩa của Đoàn Thanh Niên
            Phường Móng Cái 1
          </motion.p>
        </div>

        {loading ? (
          <motion.div
            className="flex justify-center items-center h-64"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="text-center">
              <motion.div
                className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <motion.p
                className="text-white text-lg font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Đang tải sự kiện...
              </motion.p>
            </div>
          </motion.div>
        ) : (
          <>
            {listPager.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {listPager.map((news, index) => (
                  <motion.a
                    key={news.documentId}
                    href={`/events_detail/${news.documentId}`}
                    className="block group"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="bg-white shadow-xl rounded-2xl overflow-hidden card-hover glass">
                      <div className="relative overflow-hidden">
                        <motion.img
                          src={`http://103.57.223.143:1337${news.url_title.url}`}
                          alt={news.title}
                          className="w-full h-56 object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <motion.div
                            className="bg-white/90 backdrop-blur-sm rounded-lg p-3"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.5,
                              delay: index * 0.1 + 0.3,
                            }}
                          >
                            <p className="text-gray-600 text-xs font-medium">
                              {formatDate(news.createdAt)}
                            </p>
                          </motion.div>
                        </div>
                      </div>
                      <div className="p-6">
                        <motion.h2
                          className="text-lg font-bold text-gray-900 mb-3 line-clamp-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.1 + 0.4,
                          }}
                        >
                          {news.title}
                        </motion.h2>
                        <motion.p
                          className="text-gray-700 text-sm line-clamp-3 leading-relaxed"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.1 + 0.5,
                          }}
                        >
                          {news.subtitle}
                        </motion.p>
                        <motion.div
                          className="mt-4 flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.1 + 0.6,
                          }}
                        >
                          <span>Xem chi tiết</span>
                          <svg
                            className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </motion.div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            ) : (
              <motion.div
                className="text-center py-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="w-24 h-24 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Chưa có sự kiện nào
                </h3>
                <p className="text-white/80">
                  Hãy quay lại sau để xem những sự kiện mới nhất!
                </p>
              </motion.div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Events;
