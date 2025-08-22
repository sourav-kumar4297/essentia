'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';


export default function ProjectsGallery({
  projects = [],
  title = 'Latest Projects',
  className = '',
}) {
  return (
    <section className={`w-full py-16 md:py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        {title && (
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 md:mb-10">
            {title}
          </h2>
        )}

        {/* Mobile: normal grid; MD+: 2-row horizontal strip */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((p) => (
            <Card key={p.id ?? p.title} project={p} />
          ))}
        </div>

        {/* MD+ : two-row, horizontal flow, snap x scroll */}
        <div
          className="
            hidden md:grid 
            grid-rows-3 grid-flow-col grid-cols-2 
            gap-5
            overflow-x-auto no-scrollbar
            snap-x snap-mandatory
            pb-2
          "
          role="list"
          aria-label="Projects"
        >
          {projects.map((p) => (
            <div key={p.id ?? p.title} className="snap-start">
              <Card project={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ project }) {
  const content = (
    <motion.article
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="relative overflow-hidden rounded-xl border border-border/70 bg-card"
    >
      <div className="relative w-full h-56 md:h-96 lg:h-72 xl:h-80 2xl:h-96">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 768px) 26vw, 100vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
          priority={false}
        />
        {/* subtle top gradient for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
      </div>

      {/* Name bar */}
      <div className="px-4 py-3 bg-card/70 backdrop-blur flex items-center justify-between">
        <h3 className="text-sm md:text-base font-medium truncate">
          {project.title}
        </h3>
      </div>

      {/* soft hover glow */}
      <div className="absolute -inset-px rounded-xl opacity-0 hover:opacity-100 transition duration-500 blur-md bg-gradient-to-r from-amber-500/0 via-amber-500/20 to-amber-500/0 pointer-events-none" />
    </motion.article>
  );

  return project.href ? (
    <Link href={project.href} aria-label={project.title}>
      {content}
    </Link>
  ) : (
    content
  );
}
