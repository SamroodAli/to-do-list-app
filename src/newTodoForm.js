import ToDo from './todo.js';
import renderTodos from './render.js';

import {
  form,
  select,
  option,
  labelFor,
  textInput,
  textArea,
  dateInput,
  numberInput,
  submitButton,
} from './formTags.js';

export const optionsCreator = (categories) => categories.map((category, idx) => option(category.name, '', { value: idx }));

export const selectCreator = (categories) => select(optionsCreator(categories), '', { id: 'categoriesSelect' });

const todoForm = (categories = []) => form([
  textInput('Enter title', '', { name: 'title' }),
  textArea('', '', {
    placeholder: 'Enter description for the todo',
    required: '',
    name: 'description',
  }),
  labelFor('Enter due date', 'date'),
  dateInput('Enter due date', '', { id: 'date', name: 'date' }),
  labelFor('Enter priority', 'todo-priority'),
  numberInput('', '', {
    min: 0,
    max: 10,
    id: 'priority',
    name: 'priority',
  }),
  selectCreator(categories),
  submitButton(),
]);

function onFormSubmit(form, event, categories) {
  event.preventDefault();
  const [title, description, date, priority, option] = Array.from(
    form.elements,
  ).map((ele) => ele.value);

  const category = categories[option];
  const newTodo = new ToDo(title, description, date, priority, category);
  category.addTodo(newTodo);
  renderTodos(categories);
}

export const newTodoForm = (categories) => {
  const form = todoForm(categories);
  form.addEventListener('submit', (event) => onFormSubmit(form, event, categories));
  return form;
};

export const updateTodoForm = (categories) => {
  const select = document.getElementById('categoriesSelect');
  select.innerHTML = '';
  select.append(...optionsCreator(categories));
};
