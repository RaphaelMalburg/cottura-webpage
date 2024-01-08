import Image from "next/image";
import Title from "../common/Title";
import Description from "../common/Description";
import Button from "../common/Button";

const Hero = () => {
  return (
    <section className=" z-10 top-0 overflow-hidden w-full ">
      <div className="h-[70vh] max-h-[500px] w-full relative content-container">
        <div className="absolute z-10 grid place-content-center gap-4 h-full w-full text-center   ">
          <Image src={"/cotturaname.png"} alt="logo" width={350} height={350} className="border-b  border-orange-50 pb-8 scale-90 md:scale-100" />
        </div>
        {/* <Image src={"/tortelloni.jpg"} alt="agnolotti" fill className="object-cover  w-full h-full" />
         */}
        <video autoPlay src="/pastaout.mp4" loop muted id="video" className="  absolute w-full h-full object-cover object-center blur-[2px] "></video>
        <div className="absolute w-full h-full z-index-20 bg-black/30 " />
      </div>
      <div className="content-container  my-4 grid  md:gap-4 h-fit  relative ">
        <Image src={"/pastabg.svg"} className="-z-10 opacity-10 object-cover   bg-center  " fill alt="background pasta image" />
        <Title className=" text-Black text-center ">
          <span className=" font-semibold"> Massas e molhos artesanais e ingredientes gourmet.</span>
        </Title>
        <div className="grid md:grid-cols-4 h-96 ">
          <div className=" col-span-2 flex flex-col justify-between   my-10 md:px-4">
            <Description>Tudo cuidadosamente escolhido para transformar suas refeições em momentos extraordinários.</Description>
            <Button href={"/"} variant="secondary" className=" h-fit my-4">
              Conheça nossos produtos
            </Button>
          </div>

          <div className="col-span-2 relative  w-full md:h-full overflow-hidden">
            <Image src={"/agnolotti2.jpg"} alt="agnolotti" width={500} height={500} className="object-cover scale-90  w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
