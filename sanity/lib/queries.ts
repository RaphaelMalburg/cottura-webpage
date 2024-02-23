// ./sanity/lib/queries.ts

import { groq } from "next-sanity";

export const RECIPES_QUERY = groq`*[_type == "recipes"] {
  _id,
  title,
  slug,
  shortDescription,
  images[]{
    "url": asset->url,
    "alt": alt
  },
  description,
}
`;

export const PRODUCTS_QUERY = groq`*[_type == "product"] {
  _id,
  title,
  slug,
  shortDescription,
  images[]{
    "url": asset->url,
    "alt": alt
  },
  description,
  price,
  stock
}
`;
