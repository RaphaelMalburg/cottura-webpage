"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import Image from "next/image";
import BentoContentItem from "./BentoContentItem";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
};
type TransformedProduct = {
  id: string;
  content: string;
  slug: { current: string; _type: "slug" };
  shortDescription: string;
  description: string;
  imageList: string[];
  price: number;
  spacing: number;
};

export const LayoutGrid = ({ cards }: { cards: TransformedProduct[] }) => {
  const [selected, setSelected] = useState<TransformedProduct | null>(null);
  const [lastSelected, setLastSelected] = useState<TransformedProduct | null>(null);

  const handleClick = (card: TransformedProduct) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3  max-w-7xl mx-auto gap-4 ">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.spacing > 1 ? ` col-span-${card.spacing}` : "")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              "relative overflow-hidden",
              selected?.id === card.id
                ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                ? "z-40 bg-white rounded-xl h-full w-full"
                : "bg-white rounded-xl h-full w-full"
            )}
            layout>
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <BlurImage card={card} showTitle={selected ? true : false} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn("absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10", selected?.id ? "pointer-events-auto" : "pointer-events-none")}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};

const BlurImage = ({ card, showTitle }: { card: TransformedProduct; showTitle: boolean }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative w-full h-full">
      <Image
        src={card.imageList[0]}
        fill
        onLoad={() => setLoaded(true)}
        className={cn("object-cover object-top absolute inset-0 h-full w-full transition duration-200", loaded ? "blur-none" : "blur-md")}
        alt="thumbnail"
      />
      <h1 className={cn("absolute grid w-full h-full place-content-center text-white text-2xl font-bold transition duration-200", showTitle ? "opacity-0" : "opacity-100")}>
        {card.content}
      </h1>
    </div>
  );
};

const SelectedCard = ({ selected }: { selected: TransformedProduct | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60] ">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-fit bg-black opacity-60 z-10 "
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-[70]  w-fit bg-Black/40">
        {selected ? (
          <>
            <BentoContentItem
              imageList={selected.imageList}
              content={selected.content}
              shortDescription={selected.shortDescription}
              description={selected.description}
              price={selected.price}
            />
          </>
        ) : null}
      </motion.div>
    </div>
  );
};
