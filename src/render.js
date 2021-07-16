import todoCard from './todoCard.js';

export default function renderTodos(categories) {
  const todos = [];
  categories.forEach((category) => {
    category.todos.forEach((todo) => {
      todos.push(todo);
    });
  });
  const todoCards = todos.map((todo) => todoCard(todo));
  const todoSection = document.getElementById('todos');
  todoSection.innerHTML = '';

  todoSection.append(...todoCards);
  return todoCards;
}
