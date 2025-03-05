import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import logo from "../../../assets/logoDoan.png";

export default function GradientBackground() {
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
      <div className="relative md:flex">
        <img src={logo} width={160} />
        <div>
          <motion.h1
            className="text-4xl font-bold text-white"
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, type: "tween" }}
          >
            Đoàn Thanh niên - Hội LHTN Việt Nam,Thanh Đoàn Móng Cái
          </motion.h1>
          <p className="text-gray-700 mt-4">
            Chào mừng tháng 3,Tháng thanh niên Việt Nam <br />
          </p>
        </div>
      </div>
    </div>
  );
}
