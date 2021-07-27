import { section } from "../api/tags.js";
import categoryPartial from "../views/category.js";
import { categoryTodos } from "../api/storage.js";

const categorySection = () => {
  const categories = categoryTodos();
  return section(categories.map((category) => categoryPartial(category)));
};

export default categorySection;
