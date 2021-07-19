import { newTodoForm, updateTodoForm } from "../views/todoForm.js";
import Category from "../models/category.js";
import newCategoryForm from "../views/categoryForm.js";
import { div, h2, section } from "../api/tags.js";
import { setCategories, getCategories } from "../api/storage.js";

const defaultProject = new Category("default");
if (!localStorage.length || !getCategories) {
  setCategories([defaultProject]);
}
const categories = getCategories();

const categoryForm = newCategoryForm();

function newCategory(form, event) {
  event.preventDefault();
  const [name] = Array.from(form.elements).map((ele) => ele.value);
  const newCategory = new Category(name);
  categories.push(newCategory);
  setCategories(categories);
  updateTodoForm(categories);
}

categoryForm.addEventListener("submit", (event) =>
  newCategory(categoryForm, event)
);

export default (todo = {}) =>
  section(
    [
      div([h2("New To-Do Form"), newTodoForm(categories, todo)]),
      div([h2("New Category Form"), categoryForm]),
    ],
    "form-section"
  );
