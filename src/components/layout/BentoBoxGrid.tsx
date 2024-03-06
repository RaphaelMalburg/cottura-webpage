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
  spacing: number;
};
export function LayoutGridDemo({ LayoutGridProps }: { LayoutGridProps: TransformedProduct[] }) {
  return (
    <div className=" h-fit lg:py-20 py-10 w-full">
      <LayoutGrid cards={LayoutGridProps} />
    </div>
  );
}
