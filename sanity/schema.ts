import { type SchemaTypeDefinition } from "sanity";

import recipes from "./schemas/recipes";
import product from "./schemas/product";
import workshops from "./schemas/workshops";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [recipes, product, workshops],
};
