"use client";

import React from "react";
import Image from "next/image";
import { IoIosPlayCircle } from "react-icons/io";
import Title from "../common/Title";
import Description from "../common/Description";

export function VideoIntro() {
  return (
    <div className="p-8  ">
      <div className=" mx-auto place-content-center rounded-xl relative md:w-8/12   md:p-14 shadow-md h-screen">
        <Image src={"/pastabg.svg"} fill alt="pasta bg" className="  object-cover object-right opacity-10 -z-50" />
        <div className=" text-center">
          <Title className="my-10">Massas feitas a mão</Title>
          <Description className="font-normal mx-auto  drop-shadow-md  ">
            Cada massa no Cottura é uma obra-prima artesanal.
            <br /> De formatos clássicos a criações inovadoras, nossa variedade oferece algo para todos os gostos. Experimente a autenticidade em cada garfada.
          </Description>
        </div>{" "}
        <div className="relative mt-20 w-full ">
          <video autoPlay src="/pastaout.mp4" loop muted id="video" className=" w-full object-cover  rounded-xl h-full "></video>
          <div className="absolute w-full top-0 h-full z-index-20 bg-black/30 " />
        </div>
      </div>
    </div>
  );
}

export default VideoIntro;
