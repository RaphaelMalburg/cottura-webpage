import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import Title from "../common/Title";
import Description from "../common/Description";

const PastaCourse = () => {
  return (
    <section className="w-full   container">
      <Image src={"/roundlogo.png"} width={150} height={150} alt="rounded logo" className="mx-auto py-5 spin " /> <div className="border-b  border-Black container mx-auto pt-8 " />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className=" md:my-auto ">
          <Title className={`pt-8 md:pb-10 text-center bottom-4 `}>Mão na massa</Title>
          <Title className={` pt-8  text-center bottom-4 `}>Crie, Deguste, Aprenda</Title>
        </div>
        <div className=" mx-auto grid gap-4 my-8 container">
          <Description className=" ">
            Participe dos nossos cursos e mergulhe nos segredos da criação de <span className=" font-medium">massas caseiras e recheadas. </span>
          </Description>
          <Description className=" ">
            Desfrute de uma experiência completa, aprendendo enquanto degusta
            <span className=" font-medium"> vinhos selecionados.</span>
          </Description>
          <Button className="">
            <Link href={"/receitas"}>Cursos</Link>
          </Button>{" "}
        </div>
      </div>
    </section>
  );
};

export default PastaCourse;
