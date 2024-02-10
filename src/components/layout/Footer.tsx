"use client";
import Image from "next/image";
import Title from "../common/Title";
import Description from "../common/Description";
import Button from "../common/Button";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Input } from "../ui/input";
import { usePathname } from "next/navigation";
import { newsletterForm } from "@/lib/validations/newsletter-form";
import { z } from "zod";
import { Form, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField } from "sanity";
import { FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "../ui/form";
import { NewsletterForm } from "../common/NewsletterForm";

const Footer = () => {
  const pathname = usePathname();

  return (
    <section className=" w-full h-fit bg-Cooper ">
      <div>
        <Title className=" text-Beige mx-auto w-fit py-10">Localização</Title>
        {pathname === "/" && <Image src={"/pastaTayna.png"} width={900} height={400} alt="mapa" className="mx-auto" />}
      </div>
      <div className="container">
        <Description className=" text-Beige mx-auto w-fit py-4">
          Explore nossa loja e descubra o mundo de possibilidades culinárias que temos a oferecer. <br /> Visite-nos pessoalmente para sentir a atmosfera acolhedora do Cottura.
        </Description>
      </div>{" "}
      <div className="">
        <div className="lg:hidden ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3555.0843500690075!2d-48.63127962369019!3d-26.995881376597815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b739f7f398cd%3A0xd09efa97e7f36ed0!2sCottura%20Pasta%20Fresca!5e0!3m2!1sen!2sie!4v1705330174930!5m2!1sen!2sie"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="mx-auto container xl:w-[1200px] h-[300px]"></iframe>
          <div className=" w-full container flex gap-1 flex-col my-2 mx-auto xl:w-[1200px] ">
            <Description className=" text-Beige mx-auto w-full ">R. 2650, 57 - sala 20 , Balneário Camboriú -SC </Description>
            <Description className=" text-Beige mx-auto w-full ">Ter - Sex : 11:00 - 19:00</Description>
            <Description className=" text-Beige mx-auto w-full ">Sab: 11:00 - 17:00</Description>
          </div>
        </div>

        <Image src={"/cotturalogospin.png"} alt="Cottura" width={400} height={300} className="  mx-auto border-b px-4  border-Beige pb-2 " />
        <footer className=" text-Beige py-8 container ">
          {" "}
          <div className="grid md:grid-cols-2 grid-cols-1    items-center gap-4 w-full mx-auto   ">
            <Description className=" md:col-span-2  text-center">Newsletter</Description>
            <NewsletterForm />
          </div>
          <div className="container mx-auto flex md:justify-center justify-between items-center">
            <div className="grid w-fit lg:pl-40 md:pl-0 h-full  md:h-fit ">
              <div className="hidden mx-auto items-center md:grid grid-cols-1 md:grid-cols-3  my-20  gap-14">
                <FaFacebook className="text-white text-5xl hover:scale-110" />
                <FaWhatsapp className="text-white text-5xl hover:scale-110" />
                <FaInstagram className="text-white text-5xl hover:scale-110" />
              </div>
            </div>

            <div className="hidden my-8 mx-auto  lg:grid ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3555.0843500690075!2d-48.63127962369019!3d-26.995881376597815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b739f7f398cd%3A0xd09efa97e7f36ed0!2sCottura%20Pasta%20Fresca!5e0!3m2!1sen!2sie!4v1705330174930!5m2!1sen!2sie"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="mx-auto   lg:w-[450px] xl:w-[580px] h-[250px]"></iframe>
              <div className=" w-full container flex gap-1 flex-col my-4 mx-auto  ">
                <Description className=" text-Beige mx-auto w-full ">R. 2650, 57 - sala 20 , Balneário Camboriú </Description>
                <Description className=" text-Beige mx-auto w-full ">Ter - Sex : 11:00 - 19:00</Description>
                <Description className=" text-Beige mx-auto w-full ">Sab: 11:00 - 17:00</Description>
              </div>
            </div>
          </div>
          <div className="grid w-full grid-cols-2 py-10 md:hidden ">
            <ul className="grid  justify-center items-center gap-2  font-bold tracking-wide text-lg my-auto cursor-pointer">
              <li className=" hover:border-2 w-auto px-4">
                <Link href="/">O Cottura</Link>
              </li>
              <li className=" hover:border-2 w-auto px-4">
                <Link href="/">Receitas</Link>
              </li>
              <li className=" hover:border-2 w-auto px-4">
                <Link href="/">Produtos</Link>
              </li>
              <li className=" hover:border-2 w-auto px-4">
                <Link href="/">Workshops</Link>
              </li>
            </ul>
            <div className="items-center mx-auto flex  py-2 flex-col justify-between">
              <FaFacebook className="text-white text-3xl  hover:scale-110" />
              <FaWhatsapp className="text-white text-3xl hover:scale-110" />
              <FaInstagram className="text-white text-3xl hover:scale-110" />
            </div>
          </div>
          <div className=" border-t-[1px]  mx-auto w-full my-2">
            <Description className="text-[12px]  lg:text-[16px] mt-4 text-center">
              © 2024 Cottura Pasta Fresca.
              <br className="md:hidden" /> Todos os direitos reservados. <br className="md:hidden" />
              Desenvolvido por Raphael Malburg
            </Description>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
