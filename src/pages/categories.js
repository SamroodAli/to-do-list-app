import { categoryValues } from "../api/storage.js";
import { section } from "../api/tags.js";
import categoryPartial from "../views/category.js";

const categorySection = (categories = categoryValues()) => {
  return section(categories.map((category) => categoryPartial(category)));
};

export default categorySection;
