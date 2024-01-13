import Image from "next/image";
import Title from "../common/Title";
import Description from "../common/Description";
import Button from "../common/Button";

const Products = () => {
  return (
    <section className="w-full h-fit relative py-10 ">
      <Image src={"/pastabg.svg"} fill alt="pasta bg" className=" md:mt-10 object-cover object-right opacity-20 -z-50" />
      <article className="content-container sm:pt-24 grid md:grid-cols-2 grid-cols-1 xl:mt-32">
        <div className="mx-auto  xs:w-[380px] w-[300px] my-auto  md:w-[400px] md:h-[460px] h-[230px] relative ">
          <Image src={"/pastahands.png"} fill alt="pasta bg" className=" object-cover " />
        </div>
        <div>
          <Title className="text-Black font-[720] md:text-4xl text-center md:text-start my-4 text-[28px]">Massas feitas a mão </Title>
          <Description
            className="text-Black font-[400]

           text-[18px]">
            Cada massa no Cottura é uma obra-prima artesanal. De formatos clássicos a criações inovadoras, nossa variedade oferece algo para todos os gostos. Experimente a
            autenticidade em cada garfada.
          </Description>
          <div className="relative  w-[310px] h-[280px]">
            <Image src={"/pastagreen.png"} fill alt="pasta bg" className=" object-fill " />
          </div>
        </div>
      </article>
    </section>
  );
};

export default Products;
{
  /**   <div className=" content-container">
        {" "}
        <Image src={"/pastabg.svg"} fill alt="pasta bg" className=" object-cover object-right opacity-20 -z-10" />
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className=" w-[300px] md:w-[400px] h-[230px] relative col-span-2 ">
            <Image src={"/pastahands.png"} fill alt="pasta bg" className=" object-cover " />
          </div>
          <div className=" col-span-3">
            <Title className="text-Black font-[700] my-4 text-[28px]">Massas feitas a mão </Title>
            <Description
              className="text-Black font-[400]

           text-[18px]">
              Cada massa no Cottura é uma obra-prima artesanal. De formatos clássicos a criações inovadoras, nossa variedade oferece algo para todos os gostos. Experimente a
              autenticidade em cada garfada.
            </Description>
          </div>
          <div className="relative  w-[310px] h-[280px]">
            <Image src={"/pastagreen.png"} fill alt="pasta bg" className=" object-fill " />
          </div>{" "}
        </div>{" "}
        <div className="relative w-full  bg-blue-200">
          <div className=" md:w-7/12   w-full  absolute h-[720px] z-10 opacity-100  bg-gray-100 rounded-tl-[140px] " />
          <div className="z-50 grid">
            <Title className="text-Black font-semibold mb-10 text-center  text-[28px]">
              Produtos <span className=" text-Cooper">gourmet</span>
            </Title>
            <Button href="/" className="md:w-1/2 md:mt-10 z-10 px-10 mx-auto" variant="secondary">
              Nossos produtos
            </Button>
            <Description className="text-Black mb-10 z-20">Tudo cuidadosamente escolhido para transformar suas refeições em momentos extraordinários</Description>
          </div>
        </div>
      </div> */
}
