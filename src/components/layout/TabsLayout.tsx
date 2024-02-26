"use client";

import Image from "next/image";
import { Tabs } from "../common/Tabs";
import Title from "../common/Title";
import Learn from "./Learn";
import MakePasta from "./MakePasta";
import MakePizza from "./MakePizza";

export function TabsDemo() {
  const dates = [{}];
  const tabs = [
    {
      title: "Workshops",
      value: "workshops",
      content: <Learn datesPasta="01/03/24 , 08/03/24" datesPizza="01/03/24 , 08/03/24" />,
    },
    {
      title: "Massas Artesanais",
      value: "massas-artesanais",
      content: <MakePasta />,
    },
    {
      title: "Pão e Pizza",
      value: "pao-pizza",
      content: <MakePizza />,
    },
  ];

  return (
    <div className="h-full  [perspective:1000px] relative  flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}
