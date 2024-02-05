import { CardRecipes } from "@/components/common/Card";
import Title from "@/components/common/Title";
import { SanityDocument } from "next-sanity";
import { loadQuery } from "../../../../sanity/lib/store";
import { RECIPES_QUERY } from "../../../../sanity/lib/queries";

const Recipes = async ({ recipes }: { recipes: SanityDocument[] }) => {
  const initial = await loadQuery<SanityDocument[]>(RECIPES_QUERY);

  console.log(initial.data);

  return (
    <div className="pt-36 lg:pt-40 grid w-full relative overflow-hidden">
      <Title className="md:text-left text-center">Receitas</Title>

      {initial.data.map((recipe: SanityDocument) => (
        <CardRecipes
          key={recipe._id}
          title={recipe.title}
          description={recipe.shortDescription}
          imageList={recipe.images.map((image: any) => image.url)}
          pathRecipe={`/${recipe.slug.current}`}
        />
      ))}
    </div>
  );
};

export default Recipes;
