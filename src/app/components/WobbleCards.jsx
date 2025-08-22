"use client";

import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import Image from "next/image";

export function WobbleCards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-[98vw]">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-gray-800 min-h-[500px] lg:min-h-[400px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Transforming Spaces with Artful Design 
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
          Our design are a harmonious blend of art and practicality, where every detail
            is meticulously crafted to elevate your experience. 
          </p>
        </div>
        <img
          src="/images/banner1.webp"
          width={500}
          height={700}
          alt="linear demo image"
          className="absolute -right-1 lg:-right-[1%] grayscale filter bottom-12 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-0 min-h-[400px]">
        <Image
          className="w-full"
          src="/images/banner3.webp"
          width={300}
          height={300}
          alt="interior"
        />
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Design with Purpose: Crafting Spaces that Inspire
        </h2>
        <p className="mt-4 max-w-[22rem] text-left  text-base/6 text-neutral-200">
          
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-gray-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[600px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Elevate Your Living Experience with Essentia Environments
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Our commitment to enhancing the quality of living extends beyond four walls, creating unique indoor-outdoor living experiences that transform the way we interact with our environments.
          </p>
        </div>
        <img
          src="/images/banner2.webp"
          width={850}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[4%] lg:-right-[2%] -bottom-1 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
