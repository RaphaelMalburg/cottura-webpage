import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import Title from "../common/Title";
import Description from "../common/Description";

const PastaCourse = () => {
  return (
    <section className="w-full ">
      <Image src={"/roundlogo.png"} width={150} height={150} alt="rounded logo" className="mx-auto py-5 spin " /> <div className="border-b  border-Black w-2/3 mx-auto pt-8 " />
      <Title className={`pt-8  text-center    bottom-4 `}>Mão na massa</Title>
      <Title className={` pt-8  text-center    bottom-4 `}>Crie, Deguste, Aprenda</Title>
      <div className=" mx-auto grid gap-8 my-4 container content-container">
        <Description className=" text-md md:text-xl text-customColor-brandBlack">
          Participe dos nossos cursos e mergulhe nos segredos da criação de <span className=" font-medium">massas caseiras e recheadas. </span>
        </Description>
        <Description className=" text-md md:text-xl text-customColor-brandBlack">
          Desfrute de uma experiência completa, aprendendo enquanto degusta
          <span className=" font-medium"> vinhos selecionados.</span>
        </Description>
        <Button>
          <Link href={"/receitas"}>Cursos</Link>
        </Button>{" "}
      </div>
    </section>
  );
};

export default PastaCourse;
