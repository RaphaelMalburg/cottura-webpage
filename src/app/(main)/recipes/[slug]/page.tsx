import { CardRecipes } from "@/components/common/Card";
import Title from "@/components/common/Title";
import { SanityDocument } from "next-sanity";
import { loadQuery } from "../../../../../sanity/lib/store";
import { RECIPES_QUERY } from "../../../../../sanity/lib/queries";
import FilterParam from "@/lib/FilterParam";
import { CarouselSpacing } from "@/components/common/Carousel";
import Description from "@/components/common/Description";

const RecipesPresentation = async ({ params }: { params: { slug: string } }) => {
  const slug = FilterParam(params.slug);
  const initial = await loadQuery<SanityDocument[]>(RECIPES_QUERY);

  console.log(initial.data);
  const filteredData = initial.data.filter((recipe) => recipe.slug.current === slug);

  console.log(filteredData);
  return (
    <section className="pt-36 lg:pt-40 w-full relative overflow-hidden sm:container my-20">
      {/* Render your filtered data here */}
      {filteredData.map((recipe: SanityDocument) => (
        <div key={recipe._id} className="w-full h-fit grid grid-cols-1 md:grid-cols-3">
          <div className=" col-span-2  ">
            <CarouselSpacing arrayImages={recipe.images.map((image: any) => image.url)} className="max-w-2xl mx-auto" />
          </div>
          <div className=" col-span-1   ">
            <Title> {recipe.title}</Title>
            <Description>{recipe.shortDescription}</Description>
            <Description className="font-medium">{recipe.Description}</Description>
          </div>
          {/*   <CardRecipes
            title={recipe.title}
            description={recipe.shortDescription}
            imageList={recipe.images.map((image: any) => image.url)}
            pathRecipe={`/recipes/${recipe.slug.current}`}
      />*/}
        </div>
      ))}
    </section>
  );
};

export default RecipesPresentation;
