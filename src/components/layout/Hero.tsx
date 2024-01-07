import Image from "next/image";
import Title from "../common/Title";
import Description from "../common/Description";

const Hero = () => {
  return (
    <section className="absolute z-10 top-0 overflow-hidden ">
      <div className="h-[70vh]  w-full relative">
        <div className="text-white absolute z-10 grid place-content-center gap-4 h-full w-full text-center   ">
          <Image src={"/cotturaname.png"} alt="logo" width={350} height={350} className="border-b  border-orange-50 pb-8 scale-90 md:scale-100" />
        </div>

        <video autoPlay src="/introcottura.mp4" loop muted id="video" className="  absolute w-full h-full object-cover object-center blur-[2px] "></video>
        <div className="absolute w-full h-full z-index-20 bg-black/70 " />
      </div>
      <div className="content-container  my-4 grid gap-4 h-fit relative">
        <Title className=" text-Black leading-relaxed ">
          Explore nossa exclusiva seleção de
          <span className=" font-medium"> massas artesanais, molhos caseiros, e ingredientes gourmet.</span>
        </Title>
        <Description>Tudo cuidadosamente escolhido para transformar suas refeições em momentos extraordinários.</Description>
        <Image src={"/pastabg.svg"} className="-z-10 opacity-40 object-cover  scale-110 " fill alt="background pasta image" />
      </div>
    </section>
  );
};

export default Hero;
