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
