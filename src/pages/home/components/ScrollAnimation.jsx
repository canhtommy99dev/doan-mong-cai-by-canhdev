import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const sections = ["Scroll", "to", "trigger", "animations!"];
const colors = ["#ff0088", "#dd00ee", "#9911ff", "#0d63f8"];

const ScrollAnimation = () => {
  const [visibleIndex, setVisibleIndex] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".scroll-section");
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setVisibleIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col overflow-x-hidden h-screen">
      {sections.map((text, index) => (
        <div
          key={index}
          className="scroll-section flex justify-center items-center h-screen"
          style={{ background: colors[index] + "33" }}
        >
          <motion.pre
            initial={{ opacity: 0, x: -100 }}
            animate={
              visibleIndex === index
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -100 }
            }
            transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1] }}
            className="text-6xl font-bold"
            style={{ color: colors[index] }}
          >
            {text}
          </motion.pre>
        </div>
      ))}
    </div>
  );
};

export default ScrollAnimation;
