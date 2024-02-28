import Image from "next/image";
import Description from "../common/Description";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";

type LearnProps = {
  datesPasta: string | undefined;
  datesPizza: string | undefined;
};

const Learn = (dates: LearnProps) => {
  return (
    <div className="container mx-auto grid h-fit w-full max-w-full grid-cols-1 md:grid-cols-2">
      <div className=" ">
        <Title className="text-Black font-semibold  mb-10">
          Aprenda com o <span className=" text-Cooper">Cottura</span>
        </Title>
        <div className="grid gap-3">
          <Description>Aprenda a fazer massas artesanais, pães, pizzas e muito mais com o Cottura. Conheça nossos workshops e produtos.</Description>
          <Description>
            Com workshops de massas artesanais, pães e pizzas, a Cottura oferece a oportunidade de aprender e se divertir enquanto cozinha com amigos e familiares.
          </Description>
        </div>
      </div>

      <div className="w-full px-4 relative rounded-xl overflow-hidden  pt-8">
        <Image src="/agnolotti3.jpg" alt="pasta agnolotti" width={500} height={500} className="w-full h-72 object-cover object-center rounded-xl" />
      </div>
      <div className="mx-4 md:col-span-2 my-8 grid gap-2 bg-gray-100 rounded-xl p-4">
        <SubTitle className=" text-Black my-4 ">Confira as datas dos próximos workshops:</SubTitle>

        {dates.datesPasta && (
          <Description>
            Massas artesanais: <span className=" font-semibold"> {dates.datesPasta}</span>
          </Description>
        )}
        {dates.datesPizza && (
          <Description>
            Pães e pizzas: <span className=" font-semibold">{dates.datesPizza}</span>
          </Description>
        )}
      </div>
    </div>
  );
};
export default Learn;
