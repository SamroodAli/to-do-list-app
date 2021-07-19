import todoCard from "../views/todoCard.js";
import { section } from "../api/tags.js";

const TodosPage = (todos = []) => {
  const todoCards = todos.map((todo) => todoCard(todo));
  return section(todoCards);
};

export default TodosPage;
