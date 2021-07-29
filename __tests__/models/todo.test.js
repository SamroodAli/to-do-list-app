import Todo from '../../src/models/todo.js';

test('Todo model class', () => {
  const actual = new Todo('New task', 'testing project', '24/12/2020', 10);
  const expected = {
    title: 'New task',
    description: 'testing project',
    date: '24/12/2020',
    priority: 10,
  };
  expect(actual).toEqual(expected);
});
