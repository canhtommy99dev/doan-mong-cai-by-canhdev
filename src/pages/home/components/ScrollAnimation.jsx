import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

const ScrollAnimation = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-20">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white p-10 rounded-2xl shadow-lg text-xl font-semibold"
        >
          Section {i + 1}
        </motion.div>
      ))}
    </div>
  );
};

export default ScrollAnimation;
