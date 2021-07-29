import "@testing-library/jest-dom";
import document from "../document.js";
import CategorySection from "../../src/pages/categories.js";

test("categories section markup", () => {
  const todo = {
    title: "New task",
    description: "testing project",
    date: "24/12/2020",
    priority: 10,
  };
  const categories = [
    { name: "default", todos: [todo], id: "4FLmPuv09_JmgBKTeSWP3" },
  ];
  const actual = CategorySection(categories);
  expect(actual.outerHTML).toEqual(
    '<section><div class="card"><h3></h3><button class="btn-secondary"></button></div></section>'
  );
});
