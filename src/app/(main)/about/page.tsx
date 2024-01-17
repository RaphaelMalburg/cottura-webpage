import { CarouselSpacing } from "@/components/common/Carousel";
import Description from "@/components/common/Description";
import Title from "@/components/common/Title";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  const imageList = ["/agnolotti.jpg", "/tortelloni.jpg", "/agnolotti2.jpg", "/cantucci.jpg"];
  return (
    <div className="pt-36 lg:pt-40 grid w-full relative">
      <div className="grid px-8 container">
        <div className="md:container mx-auto  grid h-full w-full grid-cols-1  lg:mt-14 md:grid-cols-2">
          <div className="col-span-1">
            <Title className="text-Black font-semibold mb-10">
              Descubra o prazer de cozinhar com os <span className=" text-Cooper">melhores</span> ingredientes
            </Title>
            <Description className="text-Black mb-10 z-20 ">
              Aqui, no Cottura, celebramos a autenticidade e o sabor inigualável das massas frescas e recheadas. <br />
              Fundado com o propósito de compartilhar a riqueza da tradição italiana, nossa jornada culinária vai além do simples ato de cozinhar; é uma experiência dedicada a
              trazer um pedacinho da Itália para a sua mesa.
            </Description>
            <div className="md:container mx-auto mb-6 md:mb-0 flex justify-around md:flex-row flex-col">
              <Title className="text-Black mb-10">
                Produtos <span className=" text-Cooper">Gourmet</span>
              </Title>
            </div>
          </div>
          <Image width={470} height={576} src="/agnolotti.jpg" alt="Pasta " />{" "}
        </div>
      </div>

      <div className="relative">
        {" "}
        <div className="md:ml-[350px] lg:ml-[650px] w-full absolute h-[980px] sm:h-[650px]  bg-gray-100 rounded-tl-[140px] -z-10 top-0 left-0" />
      </div>
    </div>
  );
};
export default About;
