import Image from "next/image";
import Description from "../common/Description";
import Title from "../common/Title";
import { Button } from "../ui/button";
import Link from "next/link";

const Hero2 = () => {
  return (
    <div className="pt-28 lg:pt-20  h-fit">
      <div className=" md:w-7/12 w-full absolute h-[720px] bg-gray-100  rounded-br-[140px]   -z-20" />
      <header className="grid px-8">
        <div className="md:container mx-auto  grid h-full w-full grid-cols-1  lg:mt-14 md:grid-cols-2">
          <div className="col-span-1">
            <Title className="text-Black  font-semibold mb-10">
              Massas <span className=" text-Cooper">frescas</span>,<br /> molhos <span className=" text-Cooper">artesanais</span> e<br /> produtos
              <span className=" text-Cooper"> gourmet</span>
            </Title>
            <Description className="text-Black mb-10">Tudo cuidadosamente escolhido para transformar suas refeições em momentos extraordinários</Description>
            <div className="grid grid-rows-4 sm:grid-rows-1 sm:grid-cols-3 md:gap-10">
              <div className=" md:my-0 flex flex-col justify-center ">
                <h3 className="border-b-2 w-fit font-semibold  mb-1.5 border-Black">724Kg+</h3>
                <p className="text-Black font  text-sm">Em Farinha italiana por ano</p>
              </div>{" "}
              <div className=" md:my-0 flex flex-col justify-center">
                <h3 className="border-b-2 w-fit font-semibold  mb-1.5 border-Black">3257 und+</h3>
                <p className="text-Black text-sm">De Tortellonis feitos a mão</p>
              </div>{" "}
              <div className=" md:my-0 flex flex-col justify-center">
                <h3 className="border-b-2 w-fit font-semibold  mb-1.5 border-Black">40+</h3>
                <p className="text-Black text-sm">Workshops ao ano</p>
              </div>{" "}
              <Button className="mt-10 w-fit ">
                <Link href="/">Confira nossas receitas</Link>
              </Button>
            </div>
          </div>
          {/**inicio mobile */}
          <Image
            width={470}
            height={576}
            src="/pastanest.png"
            alt="Pasta nest"
            className="  hidden lg:block h-full max-h-[30rem]  max-w-[15rem] -translate-y-32 md:max-h-[38rem]  md:max-w-[18rem] lg:-mt-40 lg:max-h-[48rem] lg:max-w-[24rem] lg:translate-y-0"
          />
          <div className="grid cols-span-1 grid-cols-2 lg:hidden  ">
            <div className=" grid md:grid-cols-3 md:gap-10">
              <Image
                width={470}
                height={576}
                src="/pastanest.png"
                alt="Pasta nest"
                className="col-span-1 my-20  h-full max-h-[30rem]  max-w-[15rem] -translate-y-32 md:max-h-[38rem]  md:max-w-[18rem] lg:-mt-40 lg:max-h-[48rem] lg:max-w-[24rem] lg:translate-y-0"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Hero2;
