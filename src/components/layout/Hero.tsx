import Image from "next/image";
import Title from "../common/Title";
import Description from "../common/Description";
import Button from "../common/Button";

const Hero = () => {
  return (
    <section className=" pt-20 content-container   ">
      <div className=" md:w-7/12 w-full absolute h-[600px] bg-gray-100  rounded-br-[140px] -z-20" />
      <div className="grid md:grid-cols-2 w-full">
        <div className="pt-20 ">
          <Title className="text-Black font-semibold mb-10">
            Massas <span className=" text-Cooper">frescas</span>,<br /> molhos <span className=" text-Cooper">artesanais</span> e<br /> produtos
            <span className=" text-Cooper"> gourmet</span>
          </Title>
          <Description className="text-Black mb-10">Tudo cuidadosamente escolhido para transformar suas refeições em momentos extraordinários</Description>
        </div>
        <div className="relative w-[200px] h-[400px]">
          <Image src="/pastanest.png" alt="logo" fill className="-mt-10 " />
        </div>
        <Button href="/" variant="secondary">
          Confira nossas receitas
        </Button>
      </div>
    </section>
  );
};

export default Hero;
/*style={{ backgroundImage: "url('/BG.png')" }}*/
