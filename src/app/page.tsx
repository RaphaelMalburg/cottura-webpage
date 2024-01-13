import Hero from "@/components/layout/Hero";
import Hero2 from "@/components/layout/Hero2";
import Products from "@/components/layout/Products";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full  mx-auto  overflow-hidden">
      <Hero2 />{" "}
      {/*   <Hero />
      <Products />*/}
    </main>
  );
}
