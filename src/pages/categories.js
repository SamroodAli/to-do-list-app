import { section } from "../api/tags.js";
import categoryPartial from "../views/category";

import { getCategories } from "../api/storage.js";

const categorySection = () => {
  let categories = Object.values(getCategories());
  return section(categories.map((category) => categoryPartial(category)));
};

export default categorySection;
