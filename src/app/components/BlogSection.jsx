"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const blogs = [
  {
    title: "10 Ways to Elevate Your Interior Aesthetic",
    image: "/images/blog1.webp",
    date: "July 10, 2025",
    description: "Explore expert-approved ideas to transform your space effortlessly.",
  },
  {
    title: "Color Trends That Are Defining 2025",
    image: "/images/blog2.webp",
    date: "July 5, 2025",
    description: "From warm neutrals to bold statements — discover what’s in.",
  },
  {
    title: "Sustainable Design Choices You Can Make Today",
    image: "/images/blog3.webp",
    date: "June 28, 2025",
    description: "Learn how to design with a conscience while staying stylish.",
  },
];

export default function BlogSection() {
  return (
    <section className=" py-20 px-6 container">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-center mb-12"
        >
          From Our Journal
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className=" overflow-hidden shadow-lg hover:shadow-amber-500/30 transition-shadow group"
            >
              <div className="relative w-full h-52">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <p className="text-xs text-amber-500 uppercase mb-2">{blog.date}</p>
                <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                <p className="text-sm ">{blog.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
