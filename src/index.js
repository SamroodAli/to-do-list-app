import newTodoForm from "./newTodoForm.js";
import ToDo from "./todo.js";
import todoCard from "./todoCard";

const content = document.getElementById("content");

const form = newTodoForm();

function submit(form, event) {
  event.preventDefault();
  const [title, description, date, priority] = Array.from(form.elements).map(
    (ele) => ele.value
  );
  console.log(title, description, date, priority);
}

form.addEventListener("submit", (event) => submit(form, event));

content.appendChild(form);
