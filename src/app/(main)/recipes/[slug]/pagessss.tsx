import FilterParam from "@/lib/FilterParam";
import GetRecipeData from "@/lib/useGetRecipeData";
import { loadQuery } from "@sanity/react-loader";
import { SanityDocument } from "next-sanity";
import { RECIPES_QUERY } from "../../../../../sanity/lib/queries";

const RecipesDetails = async ({ params }: { params: { slug: string } }) => {
  const slug = FilterParam(params.slug);
  const initial = await loadQuery<SanityDocument[]>(RECIPES_QUERY);

  console.log(initial.data);
  return (
    <div>
      <h1>Recipe</h1>
      <h1>{slug}</h1>
    </div>
  );
};

export default RecipesDetails;
