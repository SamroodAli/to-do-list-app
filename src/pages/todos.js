import todoCard from "../views/todoCard.js";
import { h2 } from "../api/tags.js";

export const renderTodos = (categories) => {
  const todos = [];
  categories.forEach((category) => {
    category.todos.forEach((todo) => {
      todos.push(todo);
    });
  });
  const todoCards = todos.map((todo) => todoCard(todo));
  const todoSection = document.getElementById("todos");
  todoSection.innerHTML = "";

  todoSection.append(...todoCards);
  return todoCards;
};

const TodosPage = (categories) => {
  h2(`todos in ${categories}`);
};

export default TodosPage;
