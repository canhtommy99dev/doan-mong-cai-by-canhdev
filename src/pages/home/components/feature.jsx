import { motion } from "framer-motion";

const text = `Đoàn Thanh Niên Cộng Sản Hồ Chí Minh là tổ chức chính trị - xã hội của thanh niên Việt Nam, 
tiên phong trong các phong trào và hoạt động xã hội.Đoàn Thanh Niên Cộng Sản Hồ Chí Minh
 là tổ chức chính trị - xã hội của thanh niên Việt Nam, tiên phong trong các phong trào và hoạt động xã hội..`;

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function SplitText() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-100 px-4 text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {text.split("\n").map((line, lineIndex) => (
        <div
          key={lineIndex}
          className="overflow-hidden text-2xl sm:text-4xl md:text-5xl font-bold leading-relaxed"
        >
          {line.split("").map((char, charIndex) => (
            <motion.span key={charIndex} variants={letterVariants}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
          <br />
        </div>
      ))}
    </motion.div>
  );
}
