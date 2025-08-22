"use client";
import Image from "next/image";
import { Typewriter } from 'react-simple-typewriter'

const projects = [
  {
    title: "Interior Design",
    image: "/images/interior.webp",
  },
  {
    title: "Bespoke Furniture",
    image: "/images/bespoke.webp",
  },
  {
    title: "Decor",
    image: "/images/decor.webp",
  },
  {
    title: "Exterior Design",
    image: "/images/exterior.webp",
  },
  {
    title: "Landscaping",
    image: "/images/landscaping.webp",
  },
  {
    title: "Commercial Spaces",
    image: "/images/commercial.webp",
  },
];

export default function Projects() {
  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
          Our{" "}
          <span className="text-amber-400">
            <Typewriter
              words={[
                "Projects",
                "Signature Spaces",
                "Design Story",
                "Bold Visions",
                "Crafted Environments",
                "Built Narratives",
                "Inspired Works",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={40}
              delaySpeed={1000}
            />
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="group relative overflow-hidden shadow-lg cursor-pointer"
            >
              <Image
                src={proj.image}
                alt={proj.title}
                width={800}
                height={600}
                className="w-full h-84 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Corner Border */}
              <div className="absolute inset-0 pointer-events-none z-10">
                <span className="absolute top-2 left-2 w-0 h-0 border-t-2 border-l-2 border-white transition-all duration-300 group-hover:w-12 group-hover:h-12" />
                <span className="absolute top-2 right-2 w-0 h-0 border-t-2 border-r-2 border-white transition-all duration-300 group-hover:w-12 group-hover:h-12" />
                <span className="absolute bottom-2 left-2 w-0 h-0 border-b-2 border-l-2 border-white transition-all duration-300 group-hover:w-12 group-hover:h-12" />
                <span className="absolute bottom-2 right-2 w-0 h-0 border-b-2 border-r-2 border-white transition-all duration-300 group-hover:w-12 group-hover:h-12" />
              </div>

              {/* Overlay + Title */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-medium">{proj.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
