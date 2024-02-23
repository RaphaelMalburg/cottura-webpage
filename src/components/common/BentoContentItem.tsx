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
    <div className="relative grid place-content-center grid-cols-2 my-4">
      <CarouselSpacing className="h-full w-full object-cover" arrayImages={imageList} />
      <div className="p-4 h-full flex flex-col justify-between">
        <div>
          <p className="font-bold text-4xl text-white pb-4">{title}</p>
          <p className="font-normal text-base text-white">{shortDescription}</p>
        </div>
        <div className="flex justify-between items-end">
          <Badge variant={"secondary"} className="text-base my-auto">
            {formatCurrency(price)}
          </Badge>
          <Button href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`} variant={"secondary"} hrefOn className="text-base hover:opacity-80">
            Peça já
          </Button>
        </div>
      </div>
    </div>
  );
}
