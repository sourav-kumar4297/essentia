"use client";
import React from "react";


export default function MissionVision() {
  return (
    <>
      <div className="py-10 flex flex-col lg:flex-row items-center justify-center container w-full gap-4 mx-auto px-8">
        <Card
          title="To build lifelong customer relationships by offering value-driven products and services for homes and workplaces.
To foster a supportive work culture focused on safety, growth, learning, and well-being for our employees."
          icon={<h2 className="text-3xl font-semibold" key={"Mission"}>
              Mission
            </h2> }
        >
          
        </Card>
        <Card
          title="To make the lives of our customers better through elevating their lifestyle and filling their lives with joy by making their living and work spaces functional, timeless, and above all luxurious."
          icon={
            <h2 className="text-3xl font-semibold" key={"Vision"}>
              Vision
            </h2>
          }
        >
          
        </Card>
        <Card
          title="We uphold trust-based, respectful partnerships with suppliers and vendors for mutual success.
We are committed to community growth, sustainability, and proudly Swadeshi design with global sensibilities."
          icon={
            <h2 className="text-3xl font-semibold" key={"Values"}>
              Values
            </h2>
          }
        >
        </Card>
      </div>
    </>
  );
}

const Card = ({ title, icon, children }) => {
  return (
    <div
      className="border border-black/[0.2] dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-[25rem] flex items-center justify-center"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <div className="relative z-20 text-center">
        <div className="mb-4">{icon}</div>
        <h2 className="text-md mt-4">
          {title}
        </h2>
      </div>
    </div>
  );
};



export const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
