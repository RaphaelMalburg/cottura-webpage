import Image from "next/image";
import Title from "../common/Title";
import Description from "../common/Description";
import Button from "../common/Button";

const Location = () => {
  return (
    <section className=" w-full h-fit bg-Cooper ">
      <Title className=" text-Beige mx-auto w-fit pt-4">Localização</Title>
      <Image src={"/pastaTayna.png"} width={1200} height={600} alt="mapa" className="mx-auto" />
      <div className="container">
        <Description className=" text-Beige mx-auto w-fit py-4">
          Explore nossa loja e descubra o mundo de possibilidades culinárias que temos a oferecer. <br /> Visite-nos pessoalmente para sentir a atmosfera acolhedora do Cottura.
        </Description>
      </div>{" "}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3555.0843500690075!2d-48.63127962369019!3d-26.995881376597815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b739f7f398cd%3A0xd09efa97e7f36ed0!2sCottura%20Pasta%20Fresca!5e0!3m2!1sen!2sie!4v1705330174930!5m2!1sen!2sie"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="mx-auto"></iframe>
      <div className="container flex gap-1 flex-col my-2">
        <Description className=" text-Beige mx-auto w-full ">R. 2650, 57 - sala 20 , Balneário Camboriú -SC </Description>
        <Description className=" text-Beige mx-auto w-full ">Ter - Sex : 11:00 - 19:00</Description>
        <Description className=" text-Beige mx-auto w-full ">Sab: 11:00 - 17:00</Description>
      </div>
      <Image src={"/cotturalogospin.png"} alt="Cottura" width={300} height={200} className="  mx-auto" />
    </section>
  );
};

export default Location;
