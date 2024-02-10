const FilterParam = (param: string) => {
  const pathParts = param.split("/");

  // Filter out any empty parts
  const filteredParts = pathParts.filter((part) => part !== "");

  // Get the last part of the array (slug)
  const slug = filteredParts[filteredParts.length - 1];
  return slug;
};

export default FilterParam;
