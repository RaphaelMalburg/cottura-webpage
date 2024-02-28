import { defineField, defineType } from "sanity";

export default defineType({
  name: "workshops",
  title: "Workshops",
  type: "document",
  fields: [
    defineField({
      name: "pastaDates",
      title: "Pasta Dates",
      type: "string",
    }),
    defineField({
      name: "pizzaDates",
      title: "Pizza Dates",
      type: "string",
    }),
  ],
});
