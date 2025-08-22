"use client";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Newsletter() {
  return (
    <section className="relative py-16 px-6">
      {/* Top shadow divider */}
      {/* <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-amber-500/20 to-transparent z-10" /> */}

      <div className="relative z-20 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Stay in the Know
        </h2>
        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
          Subscribe to receive design inspiration, latest projects and more from
          Essentia.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 text-sm rounded-md bg-[#1c1c1c] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <button
            type="submit"
            className="bg-primary text-white px-6 py-3 font-medium transition"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Bottom shadow divider */}
      <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-t from-amber-100/20 to-transparent z-10" />
    </section>
  );
}
