import NotFound from "../not-found/NotFound";
import React from "react";
import { motion } from "framer-motion";

const EventDetail = ({ data }) => {
  const dataTest = {
    data: {
      id: 4,
      documentId: "wvkun7ptuinav1wtbcpfpmt1",
      title: "Xanh thắm “Tháng thanh niên - Tháng ba biên giới”",
      subtitle:
        'Hướng tới chào mừng kỷ niệm 94 năm Ngày thành lập Đoàn TNCS Hồ Chí Minh (26/3/1931-26/3/2025), hưởng ứng Chương trình “Tháng ba biên giới” năm 2025, sáng ngày 20/3, chi đoàn Đồn biên phòng Bắc Sơn phối hợp với Đoàn Thanh niên Công ty Cổ phần, vật tư - TKV, Đoàn Thanh niên xã Bắc Sơn và chi đoàn Phòng Cảnh sát kinh tế, Phòng Hậu cần, Công an tỉnh Quảng Ninh tổ chức thực hiện công trình "Hàng tre biên giới".',
      contentnews:
        "Theo đó, ĐVTN các đơn vị đã trồng 200 gốc tre góp phần bảo vệ biên giới; tuyên truyền và nâng cao nhận thức cho thế hệ trẻ và mọi tầng lớp Nhân dân về chủ quyền lãnh thổ, qua đó nêu cao cảnh giác, tích cực phối hợp với đồn trong đấu tranh với các hoạt động xâm phạm chủ quyền lãnh thổ, an ninh biên giới quốc gia.\n![485417680_630414192943944_1362935446007992545_n.jpg](http://localhost:1337/uploads/485417680_630414192943944_1362935446007992545_n_5c2ab02001.jpg)\n![485083827_630414246277272_4229606523584744520_n.jpg](http://localhost:1337/uploads/485083827_630414246277272_4229606523584744520_n_7943a95a5f.jpg)\n![485746663_630414312943932_2082398906186158132_n.jpg](http://localhost:1337/uploads/485746663_630414312943932_2082398906186158132_n_fcaa389999.jpg)\n",
      createdAt: "2025-03-21T16:41:53.679Z",
      updatedAt: "2025-03-21T16:41:53.679Z",
      publishedAt: "2025-03-21T16:41:53.687Z",
      url_title: {
        id: 22,
        documentId: "oyhwcts37ruz0ueixg1jkbp8",
        name: "485417680_630414192943944_1362935446007992545_n.jpg",
        alternativeText: null,
        caption: null,
        width: 1024,
        height: 768,
        formats: {
          thumbnail: {
            name: "thumbnail_485417680_630414192943944_1362935446007992545_n.jpg",
            hash: "thumbnail_485417680_630414192943944_1362935446007992545_n_5c2ab02001",
            ext: ".jpg",
            mime: "image/jpeg",
            path: null,
            width: 208,
            height: 156,
            size: 12.48,
            sizeInBytes: 12475,
            url: "/uploads/thumbnail_485417680_630414192943944_1362935446007992545_n_5c2ab02001.jpg",
          },
          small: {
            name: "small_485417680_630414192943944_1362935446007992545_n.jpg",
            hash: "small_485417680_630414192943944_1362935446007992545_n_5c2ab02001",
            ext: ".jpg",
            mime: "image/jpeg",
            path: null,
            width: 500,
            height: 375,
            size: 64.41,
            sizeInBytes: 64410,
            url: "/uploads/small_485417680_630414192943944_1362935446007992545_n_5c2ab02001.jpg",
          },
          medium: {
            name: "medium_485417680_630414192943944_1362935446007992545_n.jpg",
            hash: "medium_485417680_630414192943944_1362935446007992545_n_5c2ab02001",
            ext: ".jpg",
            mime: "image/jpeg",
            path: null,
            width: 750,
            height: 563,
            size: 133.67,
            sizeInBytes: 133669,
            url: "/uploads/medium_485417680_630414192943944_1362935446007992545_n_5c2ab02001.jpg",
          },
          large: {
            name: "large_485417680_630414192943944_1362935446007992545_n.jpg",
            hash: "large_485417680_630414192943944_1362935446007992545_n_5c2ab02001",
            ext: ".jpg",
            mime: "image/jpeg",
            path: null,
            width: 1000,
            height: 750,
            size: 212.86,
            sizeInBytes: 212861,
            url: "/uploads/large_485417680_630414192943944_1362935446007992545_n_5c2ab02001.jpg",
          },
        },
        hash: "485417680_630414192943944_1362935446007992545_n_5c2ab02001",
        ext: ".jpg",
        mime: "image/jpeg",
        size: 203.74,
        url: "/uploads/485417680_630414192943944_1362935446007992545_n_5c2ab02001.jpg",
        previewUrl: null,
        provider: "local",
        provider_metadata: null,
        createdAt: "2025-03-21T16:41:25.843Z",
        updatedAt: "2025-03-21T16:41:36.491Z",
        publishedAt: "2025-03-21T16:41:25.843Z",
      },
    },
    meta: {},
  };

  return (
    <motion.div
      className="flex justify-center items-center min-h-screen bg-gray-100 p-6"
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
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          {dataTest.data.title}
        </h2>
        <p className="text-lg text-gray-600 mb-4">{dataTest.data.subtitle}</p>
        <p className="text-sm text-gray-500 mb-4">
          🕒 {new Date(dataTest.data.createdAt).toLocaleDateString()}
        </p>
        <div className="mt-4 text-left">
          {dataTest.data.contentnews.split("\n").map((line, index) =>
            line.includes("![") ? (
              <motion.img
                key={index}
                src={line.match(/\((.*?)\)/)[1]}
                alt="Event"
                className="w-full h-auto rounded-lg shadow-md my-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
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
  );
};

export default EventDetail;
