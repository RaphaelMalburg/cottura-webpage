import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CarouselSpacing } from "./Carousel";
import Link from "next/link";

export type CardRecipesProps = {
  title: string;
  description: string;
  imageList: string[];
  pathRecipe: string;
};

export function CardRecipes({ title, description, imageList = [], pathRecipe = "" }: CardRecipesProps) {
  return (
    <Card className="min-w-[280px] max-w-[500px] hover:shadow-xl">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CarouselSpacing arrayImages={imageList} />
      </CardContent>
      <CardFooter className="flex md:justify-between flex-col md:flex-row  gap-4 justify-start">
        <Button className="w-fit">
          <Link href={pathRecipe}>Confira Receita</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
