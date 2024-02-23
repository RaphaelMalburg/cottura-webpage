"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../common/BentoBox";
import { CarouselSpacing } from "../common/Carousel";
import Image from "next/image";
import { SanityDocument } from "next-sanity";
type TransformedProduct = {
  id: string;
  content: string;
  slug: { current: string; _type: "slug" };
  shortDescription: string;
  description: string;
  imageList: string[];
  price: number;
  spacing: number; // You might want to adjust the type based on the actual type of spacing
};
export function LayoutGridDemo({ LayoutGridProps }: { LayoutGridProps: TransformedProduct[] }) {
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={LayoutGridProps} />
    </div>
  );
}

{
  /**
const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House in the woods</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House above the clouds</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a unique living experience. It&apos;s a place where the sky meets home, and tranquility is a way of
        life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (-
    <div>
      <p className="font-bold text-4xl text-white">Greens all over</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div className="relative grid place-content-center grid-cols-2">
      <CarouselSpacing className="h-full w-full object-cover" arrayImages={["/cantucci.jpg", "/cantucci.jpg", "/cantucci.jpg"]} />
      <div className="p-4">
        <p className="font-bold text-4xl text-white">Rivers are serene</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          A house by the river is a place of peace and tranquility. It&apos;s the perfect place to relax, unwind, and enjoy life.
        </p>
      </div>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/cantucci.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/cantucci.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/cantucci.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/cantucci.jpg",
  },
]; */
}
