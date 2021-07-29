import TodosPage from '../../src/pages/todos.js';

test('todos page test markup', () => {
  const todo = {
    title: 'New task',
    description: 'testing project',
    date: '24/12/2020',
    priority: 10,
    category: 'categoryid',
  };

  const actual = TodosPage([todo]);
  expect(actual.outerHTML).toEqual(
    '<section><div class="card mx-auto w-100 m-1" id="todo-0"><p></p><p></p><p></p><p></p><p></p><button></button><button></button></div></section>',
  );
});
