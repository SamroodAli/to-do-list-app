import { newTodoForm, updateTodoForm } from "./newTodoForm.js";
import Category from "./category.js";
import newCategoryForm from "./newCategoryForm";

const content = document.getElementById("content");

const categories = [];

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

content.append(newTodoForm(categories), categoryForm);
