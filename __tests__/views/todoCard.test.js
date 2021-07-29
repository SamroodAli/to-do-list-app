import todoCard from '../../src/views/todoCard.js';

test('test Todo Card from views', () => {
  const todo = {
    title: 'New task',
    description: 'testing project',
    date: '24/12/2020',
    priority: 10,
  };
  const actual = todoCard(todo);
  const expected = '<div class="card mx-auto w-100 m-1" id="todo-undefined"><p></p><p></p><p></p><p></p><p></p><button></button><button></button></div>';
  expect(actual.outerHTML).toEqual(expected);
});
