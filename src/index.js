import newTodoForm from "./newTodoForm.js";
import ToDo from "./todo.js";
import todoCard from "./todoCard";

const content = document.getElementById("content");

const form = newTodoForm();
const todos = [];

function submit(form, event) {
  event.preventDefault();
  const [title, description, date, priority, option] = Array.from(
    form.elements
  ).map((ele) => ele.value);
  console.log(option);
  const newTodo = new ToDo(title, description, date, priority);
  todos.push(newTodo);
  refresh();
}

function refresh() {
  content.innerHTML = "";
  content.append(form, ...todos.map((todo) => todoCard(todo)));
}

form.addEventListener("submit", (event) => submit(form, event));

content.append(form);
