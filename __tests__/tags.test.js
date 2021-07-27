import "@testing-library/jest-dom";
import { div } from "../src/api/tags.js";

test("testing div function in tags", () => {
  const actual = div("Hello world");
});

test("testing div wrapper for dom element", () => {
  const actual = div("Hello world", "className");
  const expected = document.createElement("div");
  expected.className = "className";
  expect(actual).toHaveClass("className");
  expect(actual.innerText).toEqual("Hello world");
  expect(actual.outerHTML).toEqual('<div class="className"></div>');
});
