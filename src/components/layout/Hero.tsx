import Image from "next/image";
import Description from "../common/Description";
import Title from "../common/Title";
import { Button } from "../ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="pt-28 lg:pt-20 grid  w-full ">
      <div className=" md:w-7/12 w-full absolute h-[720px] bg-gray-100  rounded-br-[140px]   -z-20" />
      <div className="grid px-8">
        <div className="md:container mx-auto  grid h-full w-full grid-cols-1  lg:mt-14 md:grid-cols-2">
          <div className="col-span-1">
            <Title className="text-Black  font-semibold mb-10  [--slidein-delay:200ms] ">
              Massas <span className=" text-Cooper ">frescas</span>,<br /> molhos <span className=" text-Cooper">artesanais</span> e<br /> produtos
              <span className=" text-Cooper"> gourmet</span>
            </Title>
            <Description className="text-Black mb-10 z-20  [--slidein-delay:300ms] ">
              Tudo cuidadosamente escolhido para transformar suas refeições em momentos extraordinários
            </Description>
            <div className="grid grid-cols-2 md:grid-cols-1  h-96  ">
              {" "}
              <div className="grid grid-rows-3  justify-center mt-10 h-fit sm:grid-rows-1 sm:grid-cols-3 z-40 md:gap-10 gap-10">
                <div className=" md:my-0 flex flex-col justify-start animate-slidein [--slidein-delay:400ms]  ">
                  <h3 className="border-b-2 w-fit truncate font-semibold  mb-1.5 border-Black">724Kg+</h3>
                  <p className="text-Black font  text-sm">Em Farinha italiana por ano</p>
                </div>{" "}
                <div className=" md:my-0 flex flex-col justify-start animate-slidein [--slidein-delay:500ms]  ">
                  <h3 className="border-b-2 w-fit truncate font-semibold  mb-1.5 border-Black">3257 und+</h3>
                  <p className="text-Black text-sm">De Tortellonis feitos a mão</p>
                </div>{" "}
                <div className=" md:my-0 flex flex-col justify-start animate-slidein [--slidein-delay:600ms]  ">
                  <h3 className="border-b-2 w-fit truncate font-semibold  mb-1.5 border-Black">40+</h3>
                  <p className="text-Black text-sm">Workshops ao ano</p>
                </div>{" "}
                <Button size={"lg"} className="mt-10 hidden md:block animate-slidein mx-auto [--slidein-delay:300ms]  ">
                  <Link href="/">Confira nossas receitas</Link>
                </Button>
              </div>{" "}
              <Image
                width={470}
                height={576}
                src="/pastanest.png"
                alt="Pasta nest"
                className="col-span-1 mt-20 -z-10 h-full max-h-[30rem]  max-w-[15rem] -translate-y-32 md:max-h-[38rem] md:hidden  md:max-w-[18rem] lg:-mt-40 lg:max-h-[48rem] lg:max-w-[24rem] lg:translate-y-0"
              />{" "}
            </div>{" "}
            <Button className="mt-10 w-full md:hidden  mx-auto px-10 ">
              <Link href="/">Confira nossas receitas</Link>
            </Button>
          </div>

          <Image
            width={470}
            height={576}
            src="/pastanest.png"
            alt="Pasta nest"
            className="  hidden md:block h-full max-h-[30rem]  max-w-[15rem] -translate-y-32 md:max-h-[38rem] mt-20  md:max-w-[18rem] lg:-mt-20 lg:max-h-[40rem] lg:max-w
            -[24rem] lg:translate-y-0"
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
