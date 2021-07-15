import Form from "./newTodoForm";
const content = document.getElementById("content");

const form = Form();

function submit(form, event) {
  event.preventDefault();
  const toDoInfo = Array.from(form.elements).map((ele) => ele.value);
  console.log(toDoInfo);
}

form.addEventListener("submit", (event) => submit(form, event));

content.appendChild(form);
