import categoryForm from '../../src/views/categoryForm.js';

test('new CategoryForm from views', () => {
  const actual = categoryForm();
  const expected = '<form><input type="text" placeholder="Enter category name" required="" name="name"><input type="submit" placeholder="undefined" required=""></form>';
  expect(actual.outerHTML).toEqual(expected);
});
