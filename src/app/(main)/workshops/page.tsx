import Learn from "@/components/layout/Learn";
import MakePasta from "@/components/layout/MakePasta";
import MakePizza from "@/components/layout/MakePizza";
import { SanityDocument } from "next-sanity";
import { loadQuery } from "../../../../sanity/lib/store";
import { WORKSHOPS_QUERY } from "../../../../sanity/lib/queries";

export default async function WorkShop() {
  const initial = await loadQuery<SanityDocument[]>(WORKSHOPS_QUERY);

  const data = initial.data.map((item) => {
    return {
      id: item._id,
      pastaDates: item.pastaDates,
      pizzaDates: item.pizzaDates,
    };
  });

  return (
    <section className="pt-36 lg:pt-40 grid w-full relative  overflow-hidden">
      <Learn datesPasta={data[0].pastaDates} datesPizza={data[0].pizzaDates} />
      <MakePasta />
      <MakePizza />
    </section>
  );
}
