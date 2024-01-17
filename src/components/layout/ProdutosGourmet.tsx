import Image from "next/image";
import Description from "../common/Description";
import Title from "../common/Title";
import { Button } from "../ui/button";
import Link from "next/link";
import VideoIntro from "./VideoIntro";
import { CarouselSpacing } from "../common/Carousel";

const ProdutosGourmet = () => {
  const imageList = ["/agnolotti.jpg", "/tortelloni.jpg", "/agnolotti2.jpg", "/cantucci.jpg"];
  return (
    <div className="pt-28 lg:pt-20 grid md:h-[580px]  lg:h-[780px]  w-full relative">
      <div className="md:container mx-auto mb-6 md:mb-0 flex justify-around md:flex-row flex-col">
        {" "}
        <Title className="text-Black  font-semibold mb-10">
          Produtos <span className=" text-Cooper">Gourmet</span>
        </Title>
        <Button size={"lg"} variant={"default"} className="    ">
          <Link href="/">Produtos</Link>
        </Button>
      </div>
      <div></div>
      <div className="md:ml-[350px] lg:ml-[650px] w-full absolute h-[980px] sm:h-[650px]  bg-gray-100 rounded-tl-[140px] -z-10 top-0 left-0" />
      <header className="grid px-8">
        <div className="md:container mx-auto  grid h-full w-full grid-cols-1  lg:mt-14 md:grid-cols-2">
          <div className="col-span-1">
            <Title className="text-Black font-semibold mb-10">
              Descubra o prazer de cozinhar com os <span className=" text-Cooper">melhores</span> ingredientes
            </Title>
            <Description className="text-Black mb-10 z-20 ">
              Em nossa loja, oferecemos uma seleção excepcional de crispies de Parma, crocantes de parmesão, molho funghi, molho de tomates, farinha italiana premium e acessórios
              de alta qualidade, tudo para elevar sua paixão pela culinária.
            </Description>
            <div className="grid  grid-cols-1 md:grid-cols-1  h-96 ">
              {" "}
              <div className="md:hidden flex justify-center">
                {" "}
                <CarouselSpacing arrayImages={imageList} className=" " />
              </div>
            </div>{" "}
          </div>
          {/**inicio img mobile */}
          <div className=" md:flex hidden ml-10 justify-center ">
            <CarouselSpacing arrayImages={imageList} className="" />
          </div>
        </div>
      </header>
    </div>
  );
};
export default ProdutosGourmet;
