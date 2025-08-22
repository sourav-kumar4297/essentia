'use client';

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { motion } from "framer-motion";

const posts = [
  {
    title: "10 Ways to Elevate Your Interior Aesthetic",
    description: "Explore expert-approved ideas to transform your space effortlessly.",
    image: "/images/blog1.webp",
    date: "July 10, 2025",
  },
  {
    title: "Color Trends That Are Defining 2025",
    description: "From warm neutrals to bold statements — discover what's in.",
    image: "/images/blog2.webp",
    date: "July 5, 2025",
  },
  {
    title: "Sustainable Design Choices You Can Make Today",
    description: "Learn how to design with a conscience while staying stylish.",
    image: "/images/blog3.webp",
    date: "June 28, 2025",
  },
];

export function Card() {
  return (
    <div className=" container w-full m-auto px-4 py-20 bg-background text-foreground">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-semibold text-center mb-12"
      >
        From Our Journal
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 px-4 sm:px-6 lg:px-8">
        {posts.map((post, i) => (
          <CardContainer key={i} className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border h-full flex flex-col justify-between">
              <div>
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-700 dark:text-white"
                >
                  {post.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
                >
                  {post.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={post.image}
                    width="1000"
                    height="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl transition"
                    alt="thumbnail"
                  />
                </CardItem>
              </div>

              <div className="flex justify-between items-center mt-6">
                <CardItem
                  translateZ={20}
                  as="span"
                  className="text-xs text-gray-600 dark:text-gray-300"
                >
                  {post.date}
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  read now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}
