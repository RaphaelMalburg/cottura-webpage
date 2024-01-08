"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const NavbarMobile = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: "100vw" }} // Starts outside the screen on the right
      animate={{ opacity: 1, x: "0vw" }} // Moves to the half center of the page
      exit={{ opacity: 0, x: "-100vw" }} // Exits off the screen on the right
      transition={{ duration: 0.8 }}
      className=" mx-auto  bg-Beige/95 my-auto w-full absolute flex  justify-center top-0 left-0 h-screen z-30">
      <ul className="flex flex-col w-full justify-center items-center [&>li]:px-6 [&>li]:py-10 lg:[&>li]:px-10 font-[600] text-lg font tracking-wide text-custom-Beige">
        <motion.li>
          <Link href={"/"}>Quem Somos</Link>
        </motion.li>
        <motion.li>
          <Link href={"/"}>Produtos</Link>
        </motion.li>
        <motion.li>
          <Link href={"/"}>Cursos</Link>
        </motion.li>
        <motion.li>
          <Link href={"/"}>Receitas</Link>
        </motion.li>
      </ul>
    </motion.div>
  );
};
export default NavbarMobile;
