import React from "react";
import { CarouselSpacing } from "./Carousel";
import { Badge } from "../ui/badge";
import Button from "./Button";
import { formatCurrency } from "@/lib/useMoneyFormatter";

type BentoContentItemProps = {
  content: string;
  price: number;
  shortDescription: string;
  description: string;
  imageList: string[];
};

export default function BentoContentItem({ imageList, content: title, shortDescription, price }: BentoContentItemProps) {
  const phoneNumber = "5547999389007";
  const defaultMessage = `Olá, gostaria de saber mais sobre ${title}.`;
  const encodedMessage = encodeURIComponent(defaultMessage);
  return (
    <div className="relative grid grid-cols-1 place-content-center lg:grid-cols-2 my-4 pt-8">
      <CarouselSpacing className="h-full w-full " arrayImages={imageList} />
      <div className="p-4 h-full flex flex-col justify-between">
        <div className="w-full text-ellipsis">
          <p className="font-bold text-4xl text-white pb-4">{title}</p>
          <p className="font-normal text-base text-white">{shortDescription}</p>
        </div>
        <div className="grid justify-between items-end grid-cols-1 lg:grid-cols-2 gap-2">
          <Badge variant={"secondary"} className="text-base my-auto place-content-center w-full">
            {price ? formatCurrency(price) : null}
          </Badge>
          <Button href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`} variant={"secondary"} hrefOn className="md:text-base text-sm hover:opacity-80">
            Peça já
          </Button>
        </div>
      </div>
    </div>
  );
}
