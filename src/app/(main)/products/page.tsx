import React from "react";
import { client } from "../../../../sanity/lib/client";

import { SanityDocument } from "next-sanity";
import { PRODUCTS_QUERY } from "../../../../sanity/lib/queries";
import { loadQuery } from "../../../../sanity/lib/store";
import Image from "next/image";
import { CarouselSpacing } from "@/components/common/Carousel";
import { LayoutGridDemo } from "@/components/layout/BentoBoxGrid";

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
export default async function Products() {
  const initial = await loadQuery<SanityDocument[]>(PRODUCTS_QUERY);

  console.log(initial.data);
  const data = initial.data.map((item) => {
    return {
      id: item._id,
      content: item.title,
      slug: item.slug,
      shortDescription: item.shortDescription,
      description: item.description,
      imageList: item.images.map((image: any) => image.url),
      price: item.price,
      spacing: item.spacing,
    };
  });
  console.log(data);
  return (
    <div className="pt-36 lg:pt-40 grid w-full relative  overflow-hidden">
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {initial.data.map((product: SanityDocument) => (
          <div key={product._id}>
            <h1>{product.title}</h1>
            <p>{product.shortDescription}</p>
            <CarouselSpacing arrayImages={product.images.map((image: any) => image.url)} />
            <p>{product.price}</p>
          </div>
        ))}
        </div>*/}
      <LayoutGridDemo LayoutGridProps={data} />
    </div>
  );
}
