'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';

const slides = [
  { src: '/images/latest-project1.webp', title: 'Contemporary Villa' },
  { src: '/images/latest-project2.webp', title: 'Urban Apartment' },
  { src: '/images/latest-project3.webp', title: 'Luxury Retreat' },
  { src: '/images/banner3.webp',       title: 'Futuristic Workspace' },
];

export default function LatestCreations() {
  const sectionRef = useRef(null);
  const total = slides.length;

  // Give enough vertical distance so horizontal travel feels controlled.
  // 130vh per slide gives a slower, cinematic feel (tweak to taste).
  const sectionHeight = `${total * 130}vh`;

  // Progress goes 0 → 1 across the whole tall section.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    // Complete when the section bottom reaches the viewport bottom.
    // This ensures the last slide is fully visible.
    offset: ['start start', 'end end'],
  });

  // Map vertical progress to horizontal translate in vw units (0 → -((n-1)*100))
  const xRaw = useTransform(scrollYProgress, [0, 1], [0, -(total - 1) * 100]);
  const xSpring = useSpring(xRaw, { stiffness: 60, damping: 20, mass: 0.5 });
  const x = useTransform(xSpring, (v) => `${v}vw`);

  return (
    <section ref={sectionRef} style={{ height: sectionHeight }} className="relative w-full">
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        {/* Horizontal track */}
        <motion.div style={{ x }} className="flex h-full">
          {slides.map((slide, index) => (
            <Slide key={index} index={index} slide={slide} xSpring={xSpring} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Slide({ slide, index, xSpring }) {
  // Center of this slide in vw space (track moves negative)
  const center = -index * 100;

  // Derive a visibility factor (0..1) based on distance from the slide center
  // Visible within ±60vw, fade in towards center, fade out away from it.
  const visibility = useTransform(xSpring, (v) => {
    const dist = Math.abs(v - center);
    const t = 1 - Math.min(1, dist / 60); // 60 can be widened/narrowed
    return Math.max(0, t);
  });

  const headingOpacity = visibility;               // 0 → 1
  const headingY = useTransform(visibility, [0, 1], [24, 0]); // slide up in

  return (
    <div className="relative w-screen h-screen flex-none">
      <Image
        src={slide.src}
        alt={slide.title}
        fill
        priority={index === 0}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      {/* Heading overlay */}
      <motion.h2
        style={{ opacity: headingOpacity, y: headingY }}
        className="absolute inset-x-0 bottom-16 md:bottom-20 text-center px-6 text-white font-semibold text-3xl md:text-5xl leading-tight"
      >
        {slide.title}
      </motion.h2>
    </div>
  );
}


