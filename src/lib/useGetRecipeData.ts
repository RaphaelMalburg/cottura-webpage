import { SanityDocument } from "next-sanity";
import { client } from "../../sanity/lib/client";
import { loadQuery } from "@sanity/react-loader";
import { RECIPES_QUERY } from "../../sanity/lib/queries";

const GetRecipeData = async (slug: string) => {
  try {
    const initial = await loadQuery<SanityDocument[]>(RECIPES_QUERY);
    const filteredData = initial.data.filter((recipe) => recipe.slug.current === slug);
    return filteredData[0] || null;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default GetRecipeData;
