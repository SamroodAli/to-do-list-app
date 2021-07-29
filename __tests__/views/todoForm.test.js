import {
  newTodoForm,
  optionsCreator,
  selectCreator,
  updateTodoForm,
} from "../../src/views/todoForm.js";

const categories = [{ project1: { name: "project1", todos: [] } }];

test("test new Todo Form", () => {
  const actual = newTodoForm(categories);
  const expected =
    '<form><input type="text" placeholder="Enter title" required="" name="title" value=""><textarea placeholder="Enter description for the todo" required="" name="description" value="undefined"></textarea><label for="date"></label><input type="date" placeholder="Enter due date" required="" id="date" name="date" value="undefined"><label for="todo-priority"></label><input type="number" placeholder="" required="" min="0" max="10" id="priority" name="priority" value="undefined"><label for="categoriesSelect"></label><select id="categoriesSelect"><option value="undefined" selected="selected"></option></select><input type="submit" placeholder="undefined" required=""></form>';
  expect(actual.outerHTML).toEqual(expected);
});

test("Options creator in views/todoForm", () => {
  const actual = optionsCreator(categories, categories[0]);
  expect(typeof actual).toBe("object");
  expect(Array.isArray(actual)).toBe(true);
  expect(actual[0].outerHTML).toEqual('<option value="undefined"></option>');
});

test("selectCreator in views/todoForm", () => {
  const actual = selectCreator(categories, categories[0]);
  const expected =
    '<select id="categoriesSelect"><option value="undefined"></option></select>';
  expect(actual.outerHTML).toEqual(expected);
});

test("test updateTodoForm in views/todoForm", () => {
  document.body.innerHTML = `
    <div id="categoriesSelect">Hello world</div>
  `;
  const actual = updateTodoForm(categories);
  const expected = '<option value="undefined" selected="selected"></option>';
  expect(actual.innerHTML).toEqual(expected);
});
