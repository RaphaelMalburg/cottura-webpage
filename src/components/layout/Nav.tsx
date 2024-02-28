"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const scrollY = useRef(0);

  const handleMobileNavToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

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
  return (
    <nav className={`w-full fixed top-0 h-fit py-4 z-50 border-0 ${isScrolled ? "bg-gray-100/80 " : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between">
        {" "}
        <Link href={"/"}>
          <Image src="/cotturalogoblack.png" alt="logo" className="mr-10" width={80} height={80} />
        </Link>
        <ul className=" hidden lg:flex w-full justify-center items-center gap-20 font-bold  tracking-wide text-lg my-auto cursor-pointer">
          {" "}
          <li>
            <Link href={"/about"} className=" hover:border-2 border-Cooper rounded-lg px-2 py-1">
              O Cottura
            </Link>
          </li>
          <li>
            <Link href={"/recipes"} className="hover:border-2 border-Cooper rounded-lg px-2 py-1">
              Receitas
            </Link>
          </li>
          <li>
            <Link href={"/products"} className="hover:border-2 border-Cooper rounded-lg px-2 py-1">
              Produtos
            </Link>
          </li>
          <li className=" ">
            <Link href={"/workshops"} className="hover:border-2 border-Cooper rounded-lg px-2 py-1">
              Workshops
            </Link>
          </li>
        </ul>{" "}
        <Sheet open={isMobileNavOpen} onOpenChange={setIsMobileNavOpen} modal={true}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="lg:hidden block">
              <IoMenu size={35} />
            </Button>
          </SheetTrigger>
          <SheetContent side={"right"} className="bg-gray-50/70">
            <div className="grid gap-4 py-10">
              <ul className="flex flex-col z-50 h-full w-full justify-center items-center gap-40 font-bold tracking-wide text-lg my-auto">
                <li>
                  <Link href={"/about"} className="w-auto p-4" onClick={closeMobileNav}>
                    O Cottura
                  </Link>
                </li>
                <li>
                  <Link href={"/recipes"} className="p-4" onClick={closeMobileNav}>
                    Receitas
                  </Link>
                </li>
                <li>
                  <Link href={"/products"} className="p-4" onClick={closeMobileNav}>
                    Produtos
                  </Link>
                </li>
                <li>
                  <Link href={"/workshops"} className="p-4" onClick={closeMobileNav}>
                    Workshops
                  </Link>
                </li>
              </ul>
            </div>
          </SheetContent>
        </Sheet>
        {/**      <Sheet open={isMobileNavOpen} >
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetClose onClick={closeMobileNav}>
              <IoClose size={30} />
            </SheetClose>
          </SheetHeader>
          <SheetContent>
            <ul className="flex flex-col items-center gap-10">
              <li>
                <Link href={"/about"} className="hover:border-2 border-Cooper rounded-lg px-2 py-1">
                  O Cottura
                </Link>
              </li>
              <li>
                <Link href={"/recipes"} className="hover:border-2 border-Cooper rounded-lg px-2 py-1">
                  Receitas
                </Link>
              </li>
              <li>
                <Link href={"/products"} className="hover:border-2 border-Cooper rounded-lg px-2 py-1">
                  Produtos
                </Link>
              </li>
              <li>
                <Link href={"/workshops"} className="hover:border-2 border-Cooper rounded-lg px-2 py-1">
                  Workshops
                </Link>
              </li>
            </ul>
          </SheetContent>

        </Sheet> */}
      </div>
    </nav>
  );
}
