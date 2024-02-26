import { CarouselSpacing } from "@/components/common/Carousel";
import Description from "@/components/common/Description";
import Title from "@/components/common/Title";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  const imageList = ["/agnolotti.jpg", "/tortelloni.jpg", "/agnolotti2.jpg", "/cantucci.jpg"];
  return (
    <div className="pt-36 lg:pt-40 grid w-full relative  overflow-hidden">
      <div className="grid px-8 container">
        <div className="md:container mx-auto  grid h-fit w-full grid-cols-1  lg:mt-14 md:grid-cols-2">
          <div className="col-span-1 mx-4">
            <Title className="text-Black font-semibold  mb-10">O Cottura</Title>
            <Description className="text-Black mb-10 z-20 ">
              Aqui, no Cottura, celebramos a autenticidade e o sabor inigualável das massas frescas e recheadas. <br />
              Fundado com o propósito de compartilhar a riqueza da tradição italiana, nossa jornada culinária vai além do simples ato de cozinhar; é uma experiência dedicada a
              trazer um pedacinho da Itália para a sua mesa.
            </Description>
            <div className="md:container mx-auto  mb-6 md:mb-0 flex justify-around md:flex-row flex-col"></div>
          </div>

          <div className="relative w-full  h-[300px] max-w-lg flex items-end justify-center rounded-md">
            <Image fill src="/pasta1.png" alt="Pasta " className="object-cover rounded-md" />
          </div>
        </div>
      </div>
      <div className="relative grid md:grid-cols-2 grid-cols-1 container pt-20">
        <div className="md:ml-[380px] lg:ml-[580px] w-full absolute h-[980px] sm:h-[650px]  bg-gray-100 rounded-tl-[140px] -z-10 top-0 left-0 mt-8" />
        <CarouselSpacing arrayImages={imageList} className="rounded-md" />
        <div className="h-full justify-around flex flex-col px-4">
          <Title className="text-Black font-semibold w-full  ">Tradição com um Toque Moderno</Title>
          <Description className="text-Black   z-20 ">
            Mergulhamos nas raízes da cottura, mas com um olhar contemporâneo. <br />
            No Cottura, a tradição italiana é revisitada, trazendo pratos modernos que respeitam o passado, mas estão sempre sintonizados com o presente.
          </Description>{" "}
          <Button className="mt-10 w-full   mx-auto px-10 ">
            <Link href="/">Confira nossas receitas</Link>
          </Button>
        </div>
      </div>
      <div className="container py-10">
        <Description className="text-Black   z-20 ">
          Em uma jornada culinária no Cottura, mergulhamos nos sabores autênticos que definem a cozinha italiana. Com um olhar contemporâneo, reinventamos a tradição,
          transformando-a em pratos modernos que homenageiam o passado enquanto permanecem perfeitamente sintonizados com o presente.
        </Description>{" "}
      </div>
    </div>
  );
};
export default About;
