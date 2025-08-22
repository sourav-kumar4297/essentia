"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Banner({ heading, image }) {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden bg-black dark:bg-black text-white flex items-center justify-center -mt-12">
      {/* Background Image */}
      <Image
        src={image}
        alt={heading}
        fill
        priority
        className="object-cover opacity-100"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 z-10" />

      {/* Center Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="z-20 text-3xl md:text-5xl font-light text-center px-4"
      >
        {heading}
      </motion.h1>
    </section>
  );
}
