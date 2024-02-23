import { type SchemaTypeDefinition } from "sanity";

import recipes from "./schemas/recipes";
import product from "./schemas/product";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [recipes, product],
};
