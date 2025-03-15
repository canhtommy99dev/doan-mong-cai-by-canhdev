import { motion } from "framer-motion";
import imageFuture from "../../../assets/background_feauture.jpg";

export default function Feature() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-cover bg-center">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${imageFuture}')`,
          opacity: 0.5,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      ></motion.div>
      <motion.h3
        className="text-blue-500 text-center px-4 md:px-10 text-lg md:text-3xl font-bold relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Tháng Thanh niên Việt Nam (tháng 3 hằng năm) là dịp để thanh niên cả
        nước phát huy tinh thần xung kích, tình nguyện và sáng tạo trong các
        hoạt động cộng đồng
      </motion.h3>
    </div>
  );
}
