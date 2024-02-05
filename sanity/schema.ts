import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import post from "./schemas/post";
import recipes from "./schemas/recipes";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [recipes, blockContent],
};
