import Image from "next/image";
import Title from "../common/Title";

const Products = () => {
  return (
    <section className="w-full h-screen relative content-container py-10 -mt-4">
      <Image src={"/pastabg.svg"} fill alt="pasta bg" className=" object-cover opacity-40 -z-10" />
      <div className="grid md:grid-cols-5">
        <div className=" w-[300px] md:w-[400px] h-[500px] relative col-span-2">
          <Image src={"/pastahands.png"} fill alt="pasta bg" className=" object-cover " />
        </div>
        <div className=" col-span-3">
          <Title className="text-Black font-semibold mb-10">Massas feitas a mão </Title>
        </div>
      </div>
    </section>
  );
};

export default Products;
