import Image from "next/image";
import Description from "../common/Description";
import Title from "../common/Title";

type LearnProps = {
  datesPasta: string | undefined;
  datesPizza: string | undefined;
};

const Learn = (dates: LearnProps) => {
  return (
    <div className="md:container mx-auto  grid h-fit w-full grid-cols-1  lg:mt-14 md:grid-cols-2">
      <div className="col-span-1 mx-4">
        <Title className="text-Black font-semibold  mb-10">Aprenda com o Cottura</Title>
        <div className="grid gap-3">
          <Description>Aprenda a fazer massas artesanais, pães, pizzas e muito mais com o Cottura. Conheça nossos workshops e produtos.</Description>
          <Description>
            Com workshops de massas artesanais, pães e pizzas, a Cottura oferece a oportunidade de aprender e se divertir enquanto cozinha com amigos e familiares.
          </Description>
        </div>
      </div>

      <div className="w-full relative rounded-xl overflow-hidde  pt-8">
        <Image src="/agnolotti3.jpg" alt="pasta agnolotti" width={500} height={500} className="w-full h-72 object-cover object-center rounded-xl" />
      </div>
      <div className="mx-4 col-span-2 my-8 grid gap-2 bg-gray-100 rounded-xl p-4">
        <Title className=" text-Black my-4 font-semibold">Confira as datas dos próximos workshops:</Title>
        <Description className=" font-semibold">Proximas datas:</Description>
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
