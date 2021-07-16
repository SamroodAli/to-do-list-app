import { newTodoForm, updateCategories } from "./newTodoForm.js";
import ToDo from "./todo.js";
import todoCard from "./todoCard";
import Category from "./category.js";
import newCategoryForm from "./newCategoryForm";

const content = document.getElementById("content");

const categories = [];
const todos = [];

const categoryForm = newCategoryForm();

function newCategory(form, event) {
  event.preventDefault();
  const [name] = Array.from(form.elements).map((ele) => ele.value);
  const newCategory = new Category(name);
  categories.push(newCategory);
  // refresh();
  updateCategories(categories);
}

categoryForm.addEventListener("submit", (event) =>
  newCategory(categoryForm, event)
);

function submit(form, event) {
  event.preventDefault();
  const [title, description, date, priority, option] = Array.from(
    form.elements
  ).map((ele) => ele.value);

  const category = categories[option];
  const newTodo = new ToDo(title, description, date, priority, category);
  todos.push(newTodo);
  category.addTodo(newTodo);
  console.log(category.todos);
  refresh();
}

function newForm(categories) {
  const form = newTodoForm(categories);
  form.addEventListener("submit", (event) => submit(form, event));
  return form;
}

function refresh() {
  content.innerHTML = "";
  content.append(
    newForm(categories),
    categoryForm,
    ...todos.map((todo) => todoCard(todo))
  );
}
content.append(newForm(categories), categoryForm);
