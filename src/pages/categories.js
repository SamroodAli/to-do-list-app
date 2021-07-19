import { h2, section } from "../api/tags.js";

import { getCategories } from "../api/storage.js";

const categorySection = () => {
  const categories = getCategories();
  return section(categories.map((category) => h2(category.name)));
};

export default categorySection;
