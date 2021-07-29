import catogoryPartial from "../../src/views/category.js";

test("category from views category", () => {
  const category = { name: "project1", todos: [] };
  const actual = catogoryPartial(category);
  const expected =
    '<div class="card"><h3></h3><button class="btn-secondary"></button></div>';
  expect(actual.outerHTML).toEqual(expected);
});
