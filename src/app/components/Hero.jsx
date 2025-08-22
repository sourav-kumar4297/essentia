"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const slides = [
  {
    image: "/images/banner1.webp",
    title: "Where Architecture Meets Emotion",
    subtitle: "Crafting spaces that inspire timeless living.",
  },
  {
    image: "/images/banner2.webp",
    title: "Elevated by Design",
    subtitle: "Merging functionality with emotion.",
  },
  {
    image: "/images/banner3.webp",
    title: "Luxury Rooted in Vision",
    subtitle: "Designs that narrate stories with every detail.",
  },
  {
    image: "/images/banner04.webp",
    title: "Crafting Timeless Elegance",
    subtitle: "Spaces that resonate with your soul.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[70vh] md:h-[100vh] overflow-hidden -mt-10">
      {/* Background Image with Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[index].image}
            alt={slides[index].title}
            fill
            priority
            className="object-fit"
          />

          {/* Black overlay - less opacity and blur */}
          <div className="absolute inset-0 bg-black/24 z-10" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4">
        <motion.h1
          key={slides[index].title}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extralight mb-4 max-w-3xl"
        >
          {slides[index].title}
        </motion.h1>

        <motion.p
          key={slides[index].subtitle}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-200 max-w-2xl"
        >
          {slides[index].subtitle}
        </motion.p>

        <motion.button
          key={index + "-btn"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 relative px-6 py-3 border border-white text-white text-sm font-semibold uppercase tracking-wide overflow-hidden group hover:text-black"
        >
          <span className="relative z-10">Discover More</span>
          <span className="absolute inset-0 bg-white scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100 z-0" />
        </motion.button>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-30 text-white bg-black/40 p-2 rounded-full hover:bg-black/60 transition"
      >
        <FiChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 text-white bg-black/40 p-2 rounded-full hover:bg-black/60 transition"
      >
        <FiChevronRight size={28} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
