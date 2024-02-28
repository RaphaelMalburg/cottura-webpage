import Link from "next/link";
import Description from "../common/Description";
import Title from "../common/Title";
import { Button } from "../ui/button";

const MakePizza = () => {
  const phoneNumber = "5547999389007";
  const defaultMessage = `Olá, gostaria de inscrever no workshop de Pão e Pizza .`;
  const encodedMessage = encodeURIComponent(defaultMessage);
  return (
    <div className="w-full md:container overflow-hidden relative rounded-2xl p-10 text-Black h-fit">
      <Title>
        {" "}
        Workshop de <span className=" text-Cooper">Pão e Pizza</span> - Uma Noite de Sabor e Aprendizado{" "}
      </Title>
      <div className="flex flex-col gap-4 pb-4">
        <div className="w-11/12 mx-auto relative rounded-xl overflow-hidde  pt-8"></div>

        <Description>
          Explore o universo das massas artesanais em nosso Workshop exclusivo, limitado a 8 participantes. Com mãos na massa, você aprenderá a fazer a massa desde o início do
          processo.
        </Description>

        <ul className="grid gap-3">
          <li>Capacidade: Até 8 participantes.</li>
          <li>Horário: Das 19:30 às 23:30.</li>
          <li>
            Inclui:
            <ul>
              <li>Aprendizado prático do início ao fim.</li>
              <li>Degustação de vinho.</li>
              <li>Entrada com foccacia e tábua de frios.</li>
              <li>Focaccia feita durante o workshop.</li>
              <li>Pizza preparada por você.</li>
              <li>Massa de focaccia para levar para casa.</li>
            </ul>
          </li>
          <li>Investimento: R$250,00 (Pagamento antecipado).</li>
          <li>Cancelamentos: Aceitos até 48 horas antes do evento.</li>
        </ul>
      </div>
      <Button className="text-md">
        <Link href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`}>Inscreva-se</Link>
      </Button>
    </div>
  );
};
export default MakePizza;
