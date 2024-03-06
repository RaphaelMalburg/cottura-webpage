import React from "react";
import { client } from "../../../../sanity/lib/client";

import { SanityDocument } from "next-sanity";
import { PRODUCTS_QUERY } from "../../../../sanity/lib/queries";
import { loadQuery } from "../../../../sanity/lib/store";
import Image from "next/image";
import { CarouselSpacing } from "@/components/common/Carousel";
import { LayoutGridDemo } from "@/components/layout/BentoBoxGrid";
import Title from "@/components/common/Title";

export default async function Products() {
  const initial = await loadQuery<SanityDocument[]>(PRODUCTS_QUERY);

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

  return (
    <div className="pt-36 lg:pt-40 grid w-full relative  overflow-hidden md:container px-2 ">
      <Title className="text-Black  font-semibold lg:mb-10 ">
        Produtos <span className=" text-Cooper">Gourmet</span>
      </Title>

      <LayoutGridDemo LayoutGridProps={data} />
    </div>
  );
}
