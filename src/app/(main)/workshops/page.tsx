import Learn from "@/components/layout/Learn";
import MakePasta from "@/components/layout/MakePasta";
import MakePizza from "@/components/layout/MakePizza";

export default function WorkShop() {
  const imageList = ["/agnolotti.jpg", "/tortelloni.jpg", "/agnolotti2.jpg", "/cantucci.jpg"];
  return (
    <section className="pt-36 lg:pt-40 grid w-full relative  overflow-hidden">
      <Learn datesPasta="22/02/24 , 25/03/25" datesPizza="22/02/24 , 25/03/25" />
      <MakePasta />
      <MakePizza />
    </section>
  );

  {
    /**    <div className="h-[100rem] md:h-[68rem]">
      <TabsDemo />
    </div> */
  }
}
