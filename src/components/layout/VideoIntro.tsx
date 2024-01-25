"use client";

import React from "react";
import Image from "next/image";
import { IoIosPlayCircle } from "react-icons/io";
import Title from "../common/Title";
import Description from "../common/Description";

export function VideoIntro() {
  return (
    <div className="p-8  ">
      <div className=" container mx-auto place-content-center rounded-xl relative md:w-8/12  py-4 shadow-md h-fit md:pb-40 pb-32">
        <Image src={"/pastabg.svg"} fill alt="pasta bg" className="  object-cover object-right opacity-10 -z-50" />
        <div className=" mx-auto">
          <Title className="my-10 text-center">Massas feitas a mão</Title>
          <Description className="font-normal mx-auto  drop-shadow-md md:px-6 ">
            Cada massa no Cottura é uma obra-prima artesanal.
            <br /> De formatos clássicos a criações inovadoras, nossa variedade oferece algo para todos os gostos. Experimente a autenticidade em cada garfada.
          </Description>
        </div>
      </div>
      <div className="relative max-w-6xl mx-auto -mt-20 md:h-[500px] h-[300px]  w-full ">
        <video autoPlay src="/pastaout.mp4" loop muted id="video" className=" w-full object-cover object-bottom rounded-xl md:h-[500px] h-[300px]  "></video>
        <div className="absolute w-full rounded-xl top-0 md:h-[500px] h-[300px] z-index-20 bg-black/30 " />
        <Image
          src={"/cotturaname.png"}
          alt="logo"
          width={350}
          height={350}
          className="border-b z-30  absolute grid place-content-center border-orange-50 pb-8 scale-90 md:scale-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
}

export default VideoIntro;
