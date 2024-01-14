import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

interface CarouselSpacingProps {
  arrayImages: string[];
  className?: string;
}

export function CarouselSpacing({ arrayImages, className }: CarouselSpacingProps) {
  return (
    <Carousel orientation="horizontal" className="relative w-full max-w-lg">
      <CarouselContent className="-ml-1">
        {arrayImages.map((imagePath, index) => (
          <CarouselItem key={index} className="pl-1">
            <div className="p-1">
              <Card>
                <CardContent className="flex relative aspect-square items-center justify-center p-6">
                  <Image src={imagePath} fill alt={`Image ${index + 1}`} className={`w-full h-full object-cover ${className}`} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className=" top-1/2 absolute w-full flex justify-between">
        <CarouselPrevious />
        <CarouselNext />{" "}
      </div>
    </Carousel>
  );
}
