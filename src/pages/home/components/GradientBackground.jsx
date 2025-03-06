import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import logo from "../../../assets/logoDoan.png";

export default function GradientBackground() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 animate-gradient"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />
      <div
        className="relative flex flex-col md:flex-row items-center justify-center p-8 h-screen"
        ref={ref}
      >
        <motion.img
          src={logo}
          width={160}
          alt="Logo"
          className="m-5"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <div className="text-center md:text-left">
          <motion.h1
            className="text-4xl font-bold text-white px-2"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Đoàn Thanh niên - Hội LHTN Việt Nam, Thanh Đoàn Móng Cái
          </motion.h1>
          <motion.p
            className="text-white mt-4 px-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Tháng Thanh Niên – Tuổi trẻ tiên phong, sáng tạo, cống hiến vì cộng
            đồng <br />
          </motion.p>
        </div>
      </div>
    </div>
  );
}
