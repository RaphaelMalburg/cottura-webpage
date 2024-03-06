"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import Image from "next/image";
import BentoContentItem from "./BentoContentItem";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { X } from "lucide-react";

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

  const handleCloseClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full lg:p-10 grid grid-cols-1 md:grid-cols-3  max-w-7xl mx-auto gap-4 ">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.spacing > 1 ? ` col-span-${card.spacing}` : "")}>
          <Dialog>
            <motion.div onClick={() => handleClick(card)} className={cn("relative overflow-hidden rounded-lg m-auto")} layout>
              {selected?.id === card.id && <SelectedCard selected={selected} onClose={() => setSelected(null)} />}
              <BlurImage card={card} showTitle={selected ? true : false} />
            </motion.div>
          </Dialog>
        </div>
      ))}
    </div>
  );
};

const BlurImage = ({ card, showTitle }: { card: TransformedProduct; showTitle: boolean }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <DialogTrigger className="relative w-full h-full" style={{ minHeight: "200px" }}>
      <Image
        src={card.imageList[0]}
        fill
        onLoad={() => setLoaded(true)}
        className={cn("object-cover  object-center absolute inset-0 h-full w-full transition duration-200", loaded ? "blur-none" : "blur-md")}
        alt="thumbnail"
      />
      <h1
        className={cn("absolute grid w-full h-full place-content-center text-white text-2xl font-bold transition duration-200", showTitle ? "opacity-0" : "opacity-100")}
        style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.7)" }}>
        {card.content || "Default Title"}
      </h1>
    </DialogTrigger>
  );
};

const SelectedCard = ({ selected, onClose }: { selected: TransformedProduct | null; onClose: () => void }) => {
  return (
    <DialogContent className="  bg-transparent flex flex-col justify-center lg:min-w-[850px]  border-transparent items-center z-[60] ">
      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="absolute  inset-0 h-full opacity-60 z-10  "
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
        className="aboslute lg:px-8  z-[70]   w-fit bg-Black/80">
        <DialogClose onClick={onClose} className="  cursor-pointer pt-5  text-end w-fit z-[80]">
          <X className="h-6 w-6 text-white" />
        </DialogClose>
        {selected ? (
          <>
            <BentoContentItem
              imageList={selected.imageList}
              content={selected.content || "Default Content"}
              shortDescription={selected.shortDescription}
              description={selected.description}
              price={selected.price}
            />
          </>
        ) : null}
      </motion.div>
    </DialogContent>
  );
};
