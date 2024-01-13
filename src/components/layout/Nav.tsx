import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";

export function Nav() {
  return (
    <nav className="w-full fixed top-3 h-fit z-50 bg-gray-100/80 border-0">
      <div className="container mx-auto flex items-center justify-between">
        {" "}
        <Image src="/cotturalogoblack.png" alt="logo" className="mr-10" width={80} height={80} />
        <ul className=" hidden lg:flex w-full justify-center items-center gap-20 font-bold  tracking-wide text-lg my-auto cursor-pointer">
          {" "}
          <li>
            <Link href={"/"}>O Cottura</Link>
          </li>
          <li>
            <Link href={"/"}>Receitas</Link>
          </li>
          <li>
            <Link href={"/"}>Produtos</Link>
          </li>
          <li className=" ">
            <Link href={"/"}>Workshops</Link>
          </li>
        </ul>
        <Sheet>
          <SheetTrigger asChild className="lg:hidden block">
            <Button variant="ghost">
              {" "}
              <IoMenu size={35} />
            </Button>
          </SheetTrigger>
          <SheetContent side={"right"} className="  bg-gray-100/85">
            <ul className=" flex flex-col z-50 h-full w-full justify-center items-center gap-40 font-bold  tracking-wide text-lg my-auto">
              {" "}
              <li>
                <Link href={"/"} className=" p-4">
                  O Cottura
                </Link>
              </li>
              <li>
                <Link href={"/"} className=" p-4">
                  Receitas
                </Link>
              </li>
              <li>
                <Link href={"/"} className=" p-4">
                  Produtos
                </Link>
              </li>
              <li>
                <Link href={"/"} className=" p-4">
                  Workshops
                </Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>{" "}
      </div>
    </nav>
  );
}
