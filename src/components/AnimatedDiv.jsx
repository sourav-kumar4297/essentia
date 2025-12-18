"use client";

import { motion } from "framer-motion";

export default function AnimatedDiv({ children, className, initial, whileInView, viewport, transition, ...props }) {
  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      {...props}
    >
      {children}
    </motion.div>
  );
}
