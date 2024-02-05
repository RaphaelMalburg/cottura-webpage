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
