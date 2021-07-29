import Category from '../../src/models/category.js';

test('category model class', () => {
  const actual = new Category('Project1', []);
  const expected = {
    name: 'Project1',
    todos: [],
  };
  expect(actual).toMatchObject(expected);
});
