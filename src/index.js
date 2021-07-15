import Todo from "./todo.js";
import { p, div } from "./tags";
import Category from "./category.js";

const project = new Category("Project Ratchets");

const todo = new Todo("title", "description", "13/3/2020", 10, project);

const content = document.getElementById("content");
content.appendChild(
  div(
    [
      p(todo.title),
      p(todo.description),
      p(todo.date),
      p(todo.priority),
      p(todo.category.name),
    ],
    "card w-50 mx-auto p-5"
  )
);
