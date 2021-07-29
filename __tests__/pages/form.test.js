import form from "../../src/pages/form.js";
import "@testing-library/jest-dom";

test("todo form and category form in form pages", () => {
  const actual = form();
  const expected =
    '<section id="form-section"><div><h2></h2><form><input type="text" placeholder="Enter title" required="" name="title" value=""><textarea placeholder="Enter description for the todo" required="" name="description" value="undefined"></textarea><label for="date"></label><input type="date" placeholder="Enter due date" required="" id="date" name="date" value="undefined"><label for="todo-priority"></label><input type="number" placeholder="" required="" min="0" max="10" id="priority" name="priority" value="undefined"><label for="categoriesSelect"></label><select id="categoriesSelect"><option value="default"></option></select><input type="submit" placeholder="undefined" required=""></form></div><div><h2></h2><form><input type="text" placeholder="Enter category name" required="" name="name"><input type="submit" placeholder="undefined" required=""></form></div></section>';
  expect(actual.outerHTML).toEqual(expected);
});
