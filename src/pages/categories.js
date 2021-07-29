import { categoryValues } from '../api/storage.js';
import { section } from '../api/tags.js';
import categoryPartial from '../views/category.js';

const categorySection = (categories = categoryValues()) => {
  const categoryPartials = categories.map((category) => categoryPartial(category));
  return section(categoryPartials);
};

export default categorySection;
