'use client';

import { HoverEffect } from '@/components/ui/card-hover-effect';

export function ProjectsHover() {
  // Replace with your real images/titles/links
  const projects = [
    { title: 'Contemporary Villa', image: '/images/project1.jpg', link: '/projects/1' },
    { title: 'Urban Apartment',    image: '/images/project2.jpg', link: '/projects/2' },
    { title: 'Luxury Retreat',     image: '/images/project3.jpg', link: '/projects/3' },
    { title: 'Minimalist Haven',   image: '/images/project4.webp', link: '/projects/4' },
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <HoverEffect items={projects} />
      </div>
    </section>
  );
}
