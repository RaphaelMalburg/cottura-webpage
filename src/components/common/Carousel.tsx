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
    <Carousel orientation="horizontal" className="relative w-full h-fit max-w-lg">
      <div className=" absolute  h-full w-full flex justify-between items-center">
        <CarouselPrevious className="z-40 -ml-10" />
        <CarouselNext className="z-40 -mr-10" />{" "}
      </div>
      <CarouselContent className="-ml-1">
        {arrayImages.map((imagePath, index) => (
          <CarouselItem key={index} className="pl-1">
            <div className="p-1">
              <Card>
                <CardContent className="flex relative aspect-square items-center justify-center p-6">
                  <Image src={imagePath} fill alt={`Image ${index + 1}`} className={`w-full h-full object-cover z-0 ${className}`} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
