import todoCard from '../views/todoCard.js';
import { section } from '../api/tags.js';
import { categoryTodos } from '../api/storage.js';

const TodosPage = (todos = categoryTodos()) => {
  const todoCards = todos.map((todo, idx) => todoCard(todo, idx));
  return section(todoCards);
};

export default TodosPage;
