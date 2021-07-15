import newTodoForm from "./newTodoForm.js";
import ToDo from "./todo.js";
import todoCard from "./todoCard";
import Category from "./category.js";
import newCategoryForm from "./newCategoryForm";

const content = document.getElementById("content");

const project1 = new Category("Project 1");
const project2 = new Category("Project 2");
const project3 = new Category("Project 3");

const categories = [project1, project2, project3];

const form = newTodoForm(categories);
const categoryForm = newCategoryForm();
const todos = [];

function submit(form, event) {
  event.preventDefault();
  const [title, description, date, priority, option] = Array.from(
    form.elements
  ).map((ele) => ele.value);
  const newTodo = new ToDo(
    title,
    description,
    date,
    priority,
    categories[option]
  );
  todos.push(newTodo);
  refresh();
}

function refresh() {
  content.innerHTML = "";
  content.append(form, ...todos.map((todo) => todoCard(todo)));
}

form.addEventListener("submit", (event) => submit(form, event));

content.append(form, categoryForm);
