import "@testing-library/jest-dom";
import document from "../document.js";
import CategorySection from "../../src/pages/categories.js";

test("categories section markup", () => {
  const actual = CategorySection();
  expect(actual.outerHTML).toEqual(
    '<section><div class="card"><h3></h3><button class="btn-secondary"></button></div></section>'
  );
});
