import { newTodoForm, updateTodoForm } from "../views/todoForm.js";
import Category from "../models/category.js";
import newCategoryForm from "../views/categoryForm.js";
import { div, h2, section } from "../api/tags.js";
import "./style.scss";

const project = new Category("default");
const categories = [project];

const categoryForm = newCategoryForm();

function newCategory(form, event) {
  event.preventDefault();
  const [name] = Array.from(form.elements).map((ele) => ele.value);
  const newCategory = new Category(name);
  categories.push(newCategory);
  updateTodoForm(categories);
}

categoryForm.addEventListener("submit", (event) =>
  newCategory(categoryForm, event)
);

export default section(
  [
    div([h2("New To-Do Form"), newTodoForm(categories)]),
    div([h2("New Category Form"), categoryForm]),
  ],
  "form-section"
);
