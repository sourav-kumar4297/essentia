"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TeamGroup() {
  return (
    <section className="relative py-24 px-6 bg-white dark:bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold mb-12 text-black dark:text-white"
        >
          Meet the Entire Team
        </motion.h2>

        <div className="relative w-full rounded-xl max-w-full mx-auto shadow-lg hover:shadow-amber-500/20 transition-shadow">
          {/* Group Image */}
          <div className="relative z-10   ">
            <Image
              src="/images/team-group.jpg"
              alt="Essentia Full Team"
              width={1600}
              height={800}
              className="w-full h-auto  rounded-xl shadow-lg object-cover"
              priority
            />
          </div>

          
        </div>
      </div>
    </section>
  );
}
