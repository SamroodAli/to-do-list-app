import { section } from "../api/tags.js";
import categoryPartial from "../views/category.js";

const categorySection = (categories) => {
  console.log(categories);
  return section(categories.map((category) => categoryPartial(category)));
};

export default categorySection;
