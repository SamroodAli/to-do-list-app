import { div, p, button } from '../api/tags.js';
import form from '../pages/form.js';
import { getCategories, setCategories } from '../api/storage.js';
import { deleteId, changePage } from '../api/render.js';

const onClick = (todo, idx) => {
  changePage(form(todo, idx));
};

const onDelete = (id, categoryId) => {
  deleteId(id);
  const categories = getCategories();
  categories[categoryId].todos.splice(id, 1);
  setCategories(categories);
};

const todoCard = (todo, idx) => {
  const id = `todo-${idx}`;

  const editButton = button('edit Todo');
  editButton.addEventListener('click', () => onClick(todo, idx));

  const deleteButton = button('delete Todo');
  deleteButton.addEventListener('click', () => onDelete(id, todo.category));

  const ele = div(
    [
      p(todo.title),
      p(todo.description),
      p(todo.date),
      p(todo.priority),
      p(todo.category),
      editButton,
      deleteButton,
    ],
    'card mx-auto w-100 m-1',
    { id },
  );
  return ele;
};

export default todoCard;
