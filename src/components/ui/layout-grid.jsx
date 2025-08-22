"use client";;
import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const LayoutGrid = ({
  cards
}) => {
  const [selected, setSelected] = useState(null);
  const [lastSelected, setLastSelected] = useState(null);

  const handleClick = (card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div
      className="w-full h-full grid grid-cols-1 md:grid-cols-3  max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => {
  const isSelected = selected?.id === card.id;
  return (
    <div key={i} className={cn(card.className)}>
      <motion.div
        onClick={() => handleClick(card)}
        className={cn(
          card.className,
          "relative overflow-hidden",
          isSelected
            ? "rounded-lg cursor-pointer absolute inset-0 h-10/12 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
            : lastSelected?.id === card.id
            ? "z-40 bg-white rounded-xl h-full w-full"
            : "bg-white rounded-xl h-full w-full"
        )}
        layoutId={`card-${card.id}`}
      >
        {isSelected && <SelectedCard selected={selected} />}
        <ImageComponent card={{ ...card, isSelected }} />
      </motion.div>
    </div>
  );
})}

      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }} />
    </div>
  );
};

const ImageComponent = ({
  card
}) => {
  return (
     <>
      <motion.img
        layoutId={`image-${card.id}-image`}
        src={card.thumbnail}
        height="700"
        width="500"
        className="object-cover object-center absolute inset-0 h-full w-full transition duration-200"
        alt={card.title || "thumbnail"}
      />
      <div className={cn("absolute inset-0 flex items-center justify-center bg-black/40",)}>
         {!card.isSelected && (
          <h2 className="text-white text-xl md:text-2xl font-semibold text-center px-4">
            {card.title || ""}
          </h2>
        )}
      </div>
    </>
  );
};

const SelectedCard = ({ selected }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        className="absolute inset-0 h-full w-full bg-blend-lighten opacity-60 z-10"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative px-8 pb-6 z-[70] space-y-6 text-white"
      >
        {selected?.content}

        {selected?.buttonText && selected?.link && (
          <a
            href={selected.link}
            className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-md shadow hover:bg-gray-100 transition"
          >
            {selected.buttonText}
          </a>
        )}
      </motion.div>
    </div>
  );
};

