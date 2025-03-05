import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const images = [
  {
    src: "https://images.unsplash.com/photo-1520342868574-5fa3804e551c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6ff92caffcdd63681a35134a6770ed3b&auto=format&fit=crop&w=1951&q=80",
    text: "First Slide",
  },
  {
    src: "https://images.unsplash.com/photo-1522205408450-add114ad53fe?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=368f45b0888aeb0b7b08e3a1084d3ede&auto=format&fit=crop&w=1950&q=80",
    text: "Second Slide",
  },
  {
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=94a1e718d89ca60a6337a6008341ca50&auto=format&fit=crop&w=1950&q=80",
    text: "Third Slide",
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  // Function to move to the next slide
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-loop every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden">
      {/* Image & Text */}
      <motion.div
        key={index}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className="relative w-full h-64 flex items-center justify-center bg-gray-900 rounded-lg overflow-hidden"
      >
        <img
          src={images[index].src}
          alt="carousel"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-white text-2xl font-bold z-10"
        >
          {images[index].text}
        </motion.h2>
      </motion.div>

      {/* Controls */}
      <div className="absolute inset-0 flex justify-between items-center px-4">
        <Button onClick={prevSlide} className="bg-white text-white">
          ⬅️
        </Button>
        <Button onClick={nextSlide} className="bg-white text-white">
          ➡️
        </Button>
      </div>
    </div>
  );
}
