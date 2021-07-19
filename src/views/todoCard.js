import { div, p } from "../api/tags.js";

const todoCard = (todo) =>
  div(
    [
      p(todo.title),
      p(todo.description),
      p(todo.date),
      p(todo.priority),
      p(todo.category.name),
    ],
    "card mx-auto w-100 m-1"
  );

export default todoCard;
