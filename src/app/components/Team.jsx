"use client";

import { motion } from "framer-motion";

const teamMembers = [
  // Example structure – replace with real data
  {
    name: "Deepak",
    role: "CFO",
    image: "/images/team/1.webp",
  },
  {
    name: "Amrita",
    role: "Bussiness Head",
    image: "/images/team/1.webp",
  },
  {
    name: "Preeti",
    role: "BD",
    image: "/images/team/2.webp",
  },
  {
    name: "Surbhi",
    role: "Role 3",
    image: "/images/team/3.webp",
  },
  {
    name: "Vishakha",
    role: "Interior Designer",
    image: "/images/team/3.webp",
  },
  {
    name: "Yoginder ",
    role: "Architect",
    image: "/images/team/3.webp",
  },
  {
    name: "Gagan",
    role: "3D Visualizer",
    image: "/images/team/3.webp",
  },
  {
    name: "Aastha",
    role: "CRM",
    image: "/images/team/3.webp",
  },
  {
    name: "Khushpreet",
    role: "Production",
    image: "/images/team/3.webp",
  },
  {
    name: "Fiyanshu",
    role: "Stone & CNC",
    image: "/images/team/3.webp",
  },
  {
    name: "Shipra",
    role: "PPC",
    image: "/images/team/3.webp",
  },
  {
    name: "Shivani",
    role: "Decor",
    image: "/images/team/3.webp",
  },
  
];

export default function Team() {
  return (
    <section className="w-full px-6 py-20 mx-auto max-w-7xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-semibold text-center mb-12"
      >
        Designers. Thinkers. Doers.
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:gap-8 gap-2 justify-center">
        {teamMembers.map((member, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-amber-500/20 transition-shadow"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-black dark:text-white">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {member.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
