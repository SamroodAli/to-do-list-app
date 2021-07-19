import { div, h3, button } from '../api/tags.js';
import changePage from '../index.js';
import TodosPage from '../pages/todos.js';

const onClick = (todos) => () => {
  changePage(TodosPage(todos));
};

const category = ({ name, todos }) => {
  const element = div(
    [h3(name), button(`Todos in ${name}`, 'btn-secondary')],
    'card',
  );
  element.addEventListener('click', onClick(todos));
  return element;
};

export default category;
