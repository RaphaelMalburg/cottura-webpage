import Link from "next/link";
import Description from "../common/Description";
import Title from "../common/Title";
import { Button } from "../ui/button";

const MakePasta = () => {
  const phoneNumber = "5547999389007";
  const defaultMessage = `Olá, gostaria de inscrever no workshop de massas frescas .`;
  const encodedMessage = encodeURIComponent(defaultMessage);
  return (
    <div className="w-full md:container overflow-hidden relative h-fit rounded-2xl p-10 text-Black">
      <Title>
        Workshop de <span className=" text-Cooper">Massas Artesanais</span> - Criando Experiências Saborosas{" "}
      </Title>
      <div className="flex flex-col gap-4 pb-4">
        <div className="w-11/12 mx-auto relative rounded-xl overflow-hidden  pt-8"></div>

        <Description>
          Explore o universo das massas artesanais em nosso Workshop exclusivo, limitado a 6 participantes. Com mãos na massa, você aprenderá a fazer massas recheadas e não
          recheadas, enquanto os molhos são demonstrados para finalizar suas criações.
        </Description>
        <ul className="grid gap-3">
          <li>Capacidade: Até 6 participantes.</li>
          <li>Horário do curso: 19:30 às 23:30</li>
          <li>
            Inclui:
            <ul>
              <li>Aprendizado prático de massas artesanais. Uma recheada e uma não recheada</li>
              <li>Degustação de vinho.</li>
              <li>Entrada, primeiro prato e prato principal.</li>
              <li>Demonstração e finalização com molhos.</li>
            </ul>
          </li>
          <li>Investimento: R$280,00 (Pagamento antecipado).</li>
          <li>Cancelamentos: Aceitos até 48 horas antes do evento.</li>
        </ul>
      </div>
      <Button className="text-md">
        <Link href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`}>Inscreva-se</Link>
      </Button>
    </div>
  );
};
export default MakePasta;
