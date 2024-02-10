import { CardRecipes } from "@/components/common/Card";
import Title from "@/components/common/Title";
import { SanityDocument } from "next-sanity";
import { loadQuery } from "../../../../sanity/lib/store";
import { RECIPES_QUERY } from "../../../../sanity/lib/queries";

const Recipes = async () => {
  const initial = await loadQuery<SanityDocument[]>(RECIPES_QUERY);

  console.log(initial.data);

  return (
    <div className="pt-36 lg:pt-40 w-full relative overflow-hidden sm:container my-20">
      <Title className="md:text-left text-center mb-10">Receitas</Title>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 p-4 ">
        {initial.data.map((recipe: SanityDocument) => (
          <CardRecipes
            key={recipe._id}
            title={recipe.title}
            description={recipe.shortDescription}
            imageList={recipe.images.map((image: any) => image.url)}
            pathRecipe={`/recipes/${recipe.slug.current}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
