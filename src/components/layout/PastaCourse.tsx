import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import Title from "../common/Title";
import Description from "../common/Description";
import SubTitle from "../common/SubTitle";

const PastaCourse = () => {
  return (
    <section className="w-full   container">
      <Image src={"/roundlogo.png"} width={150} height={150} alt="rounded logo" className="mx-auto py-5 spin " /> <div className="border-b  border-Black container mx-auto pt-8 " />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className=" md:my-auto  pt-4">
          <Title className={` md:pb-3 text-center bottom-4 font-semibold  text-Cooper`}>Mão na massa</Title>
          <SubTitle className={` pt-3  text-center bottom-4 font-semibold mb-4`}>Crie, Deguste, Aprenda</SubTitle>
        </div>
        <div className=" mx-auto grid gap-4 my-2  pb-4">
          <Description className=" ">
            Participe dos nossos workshops e mergulhe nos segredos da criação de <span className=" font-medium">massas caseiras e recheadas. </span>
          </Description>
          <Description className="pb-2 ">
            Desfrute de uma experiência completa, aprendendo enquanto degusta
            <span className=" font-medium"> vinhos selecionados.</span>
          </Description>
          <Button>
            <Link href={"/workshops"}>Workshops</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PastaCourse;
