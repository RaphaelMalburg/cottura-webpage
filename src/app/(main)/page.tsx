import About from "@/components/layout/About";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";

import PastaCourse from "@/components/layout/PastaCourse";

import ProdutosGourmet from "@/components/layout/ProdutosGourmet";
import VideoIntro from "@/components/layout/VideoIntro";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full  mx-auto  overflow-hidden">
      <Hero />
      <VideoIntro />
      <ProdutosGourmet />

      <PastaCourse />
    </main>
  );
}
