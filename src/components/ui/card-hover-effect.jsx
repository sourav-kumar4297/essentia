"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * items: Array<{ title: string, image: string, link?: string }>
 */
export const HoverEffect = ({ items = [], className = "" }) => {
  const [hoveredIndex, setHoveredIndex] = (useState < number) | (null > null);

  return (
    <div
      className={cn(
        // 1 col on mobile, exactly 2 cols on sm+
        "grid grid-cols-1 sm:grid-cols-2 gap-6",
        "py-4",
        className
      )}
    >
      {items.map((item, idx) => {
        const handleMouseMove = (e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          e.currentTarget.style.setProperty("--x", `${x}px`);
          e.currentTarget.style.setProperty("--y", `${y}px`);
        };

        const CardInner = (
          <div
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            onMouseMove={handleMouseMove}
            className={cn(
              "relative group block h-full w-full overflow-hidden",
              // No border radius
              "border border-white/10 bg-black/20"
            )}
          >
            {/* Glow wash on hover (follows mouse via CSS vars) */}
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="pointer-events-none absolute inset-0"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.18 } }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.18, delay: 0.12 },
                  }}
                  style={{
                    background:
                      "radial-gradient(600px at var(--x) var(--y), rgba(255,255,255,0.10), transparent 40%)",
                  }}
                />
              )}
            </AnimatePresence>

            {/* Image (make it big by height class) */}
            <div className="relative z-10 h-[320px] sm:h-[420px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                priority={idx < 2}
              />
              {/* dark gradient for readability */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            </div>

            {/* Title centered near bottom */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 bottom-8 z-20"
              initial={{ y: 8, opacity: 0.92 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
            >
              <h3 className="px-4 py-2 text-white font-semibold text-2xl md:text-3xl bg-black/35 backdrop-blur-sm">
                {item.title}
              </h3>
            </motion.div>

            {/* subtle outer sheen on hover */}
            <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-amber-500/0 via-amber-500/20 to-amber-500/0 pointer-events-none" />
          </div>
        );

        return item.link ? (
          <Link
            key={item.link || item.title || idx}
            href={item.link}
            className="block"
            aria-label={item.title}
          >
            {CardInner}
          </Link>
        ) : (
          <div key={item.title || idx} className="block">
            {CardInner}
          </div>
        );
      })}
    </div>
  );
};
