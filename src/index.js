import { newTodoForm, updateTodoForm } from "./newTodoForm.js";
import Category from "./category.js";
import newCategoryForm from "./newCategoryForm.js";
import { div, h2, section } from "./tags.js";
import "./style.scss";

const content = document.getElementById("content");

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

function render() {
  content.append(
    section(
      [
        div([h2("New To-Do Form"), newTodoForm(categories)]),
        div([h2("New Category Form"), categoryForm]),
      ],
      "form-section"
    ),
    div("", "", { id: "todos" })
  );
}
// render();
