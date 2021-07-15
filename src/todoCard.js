import { div, p } from "./tags.js";

const todoCard = (todo) =>
  div(
    [
      p(todo.title),
      p(todo.description),
      p(todo.date),
      p(todo.priority),
      p(todo.category.name),
    ],
    "card w-50 mx-auto p-5"
  );

export default todoCard;
