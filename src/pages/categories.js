import { section } from '../api/tags.js';
import categoryPartial from '../views/category.js';

import { getCategories } from '../api/storage.js';

const categorySection = () => {
  const categories = Object.values(getCategories());
  return section(categories.map((category) => categoryPartial(category)));
};

export default categorySection;
