import Image from "next/image";
import Title from "../common/Title";
import Description from "../common/Description";
import Button from "../common/Button";

const Hero = () => {
  return (
    <section className=" pt-20 content-container   w-full">
      {" "}
      <div className=" md:w-7/12 w-full absolute h-[720px] bg-gray-100  rounded-br-[140px]   -z-20" />
      <div className="grid grid-cols-1 relative ">
        <div className=" pt-10 md:w-1/2 ">
          <Title className="text-Black font-semibold mb-10">
            Massas <span className=" text-Cooper">frescas</span>,<br /> molhos <span className=" text-Cooper">artesanais</span> e<br /> produtos
            <span className=" text-Cooper"> gourmet</span>
          </Title>
          <Description className="text-Black mb-10">Tudo cuidadosamente escolhido para transformar suas refeições em momentos extraordinários</Description>
        </div>

        {/**inicio div com texto e img */}
        <div className="grid grid-cols-3 md:mt-10 relative">
          {/**inicio div com texto */}
          <div className="cols-span-1 grid md:grid-cols-3 md:gap-10">
            <div className="-my-10 md:my-0 pt-4 md:pt-0">
              <h3 className="border-b-2 w-fit font-semibold  mb-1.5 border-Black">724Kg+</h3>
              <p className="text-Black font  text-sm">Em Farinha italiana por ano</p>
            </div>{" "}
            <div className="-my-10 md:my-0">
              <h3 className="border-b-2 w-fit font-semibold  mb-1.5 border-Black">3257 und+</h3>
              <p className="text-Black text-sm">De Tortellonis feitos a mão</p>
            </div>{" "}
            <div className="-my-10 md:my-0">
              <h3 className="border-b-2 w-fit font-semibold  mb-1.5 border-Black">40+</h3>
              <p className="text-Black text-sm">Workshops ao ano</p>
            </div>{" "}
          </div>
          {/**inicio div com img */}
          <div className="md:absolute md:-top-[300px] md:left-[600px]  xl:left-[800px] relative -z-20 ml-10 cols-span-2 -mt-20 w-[180px] h-[440px] md:w-[420px] md:h-[820px] col-span-2">
            <Image src="/pastanest.png" alt="logo" fill className="-mt-10  object-cover" />
          </div>
        </div>
        <Button href="/" className="md:w-1/2 md:mt-10 z-10" variant="secondary">
          Confira nossas receitas
        </Button>
      </div>
    </section>
  );
};

export default Hero;
/*style={{ backgroundImage: "url('/BG.png')" }}


      <div className="grid  w-full">
        <div className="pt-20 grid grid-cols-1 xs:grid-cols-2 sm:w-2/3 md:w-full">
          <div className="">
            <Title className="text-Black font-semibold mb-10">
              Massas <span className=" text-Cooper">frescas</span>,<br /> molhos <span className=" text-Cooper">artesanais</span> e<br /> produtos
              <span className=" text-Cooper"> gourmet</span>
            </Title>
            <Description className="text-Black mb-10">Tudo cuidadosamente escolhido para transformar suas refeições em momentos extraordinários</Description>
            <div className="  hidden xs:grid  grid-cols-3 gap-5  ">
              <div className=" mb-1.5 ">
                <h3 className="border-b-2 w-fit font-semibold  mb-1.5 border-Black">724Kg+</h3>
                <p className="text-Black font  text-sm">Em Farinha italiana por ano</p>
              </div>{" "}
              <div className=" mb-1.5">
                <h3 className="border-b-2 w-fit font-semibold  mb-1.5 border-Black">3257 und+</h3>
                <p className="text-Black text-sm">De Tortellonis feitos a mão</p>
              </div>{" "}
              <div className=" mb-1.5">
                <h3 className="border-b-2 w-fit font-semibold  mb-1.5 border-Black">40+</h3>
                <p className="text-Black text-sm">Workshops ao ano</p>
              </div>{" "}
            </div>
          </div>
          <div className="grid grid-cols-3 xs:grid-cols-1 -mb-14 overflow-x-hidden">
            <div className="w-2/3 xs:hidden">
              <div className=" mb-1.5">
                <h3 className="border-b-2 w-fit font-semibold  mb-1.5 border-Black">724Kg+</h3>
                <p className="text-Black font  text-sm">Em Farinha italiana por ano</p>
              </div>{" "}
              <div className=" mb-1.5">
                <h3 className="border-b-2 w-fit font-semibold  mb-1.5 border-Black">3257 und+</h3>
                <p className="text-Black text-sm">De Tortellonis feitos a mão</p>
              </div>{" "}
              <div className=" mb-1.5">
                <h3 className="border-b-2 w-fit font-semibold  mb-1.5 border-Black">40+</h3>
                <p className="text-Black text-sm">Workshops ao ano</p>
              </div>{" "}
            </div>
            <div className="relative  ml-10 cols-span-2 -mt-24 w-[180px] h-[440px] xs:w-[420px] xs:h-[820px]">
              <Image src="/pastanest.png" alt="logo" fill className="-mt-10  z-20 object-cover" />
            </div>
          </div>{" "}
          <Button href="/" className="mt-10" variant="secondary">
            Confira nossas receitas
          </Button>
        </div>
      </div>

















*/
