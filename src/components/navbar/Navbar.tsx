"use client";
import React, { useRef } from "react";
import { motion, useAnimation } from "framer-motion"; // Import useAnimation
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import clsx from "clsx";
import NavbarMobile from "./NavbarMobile";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

const Navbar = () => {
  const pathname = usePathname();
  const [isHome, setIsHome] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleMobileNavToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
    console.log("isMobileNavOpen", isMobileNavOpen);
  };
  const scrollY = useRef(0);

  useEffect(() => {
    const detectScrollY = () => {
      scrollY.current = window.scrollY;
      if (scrollY.current > 5) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", detectScrollY);

    return () => {
      window.removeEventListener("scroll", detectScrollY);
    };
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [pathname]);

  return (
    <nav className={`${montserrat.className}  fixed  top-0 z-20   w-full  `}>
      <div className={`content-container flex justify-between top-0  ${isScrolled ? "bg-Beige " : "bg-transparent"}`}>
        <div className="my-4">
          {isScrolled ? <Image src="/cotturalogoblack.png" alt="logo" width={80} height={80} /> : <Image src="/cotturalogowhite.png" alt="logo" width={80} height={80} />}
        </div>
        <div className={clsx("mx-auto my-auto hidden md:block z-50 text-Beige", { "text-Black ": isHome || isScrolled })}>
          <ul className="flex [&>li]:px-6 lg:[&>li]:px-10 font-medium tracking-wide text-custom-Beige ">
            <li>
              <Link href={"/"}>Quem Somos</Link>
            </li>
            <li>
              <Link href={"/"}>Produtos</Link>
            </li>
            <li>
              <Link href={"/"}>Cursos</Link>
            </li>
            <li>
              <Link href={"/"}>Receitas</Link>
            </li>
          </ul>
        </div>
        {isMobileNavOpen && <NavbarMobile />}
        <div className="z-50 my-4 absolute top-0 right-4">
          {isMobileNavOpen ? (
            <IoClose className="block md:hidden m-4 cursor-pointer " size={35} onClick={handleMobileNavToggle} />
          ) : (
            <IoMenu className={`${isScrolled ? "text-black" : "text-white"} block md:hidden m-4  cursor-pointer `} size={35} onClick={handleMobileNavToggle} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
