import "@testing-library/jest-dom";
import {
  form,
  input,
  textArea,
  label,
  select,
  option,
} from "../src/api/formTags.js";

test("testing form wrapper for dom element", () => {
  const actual = form("Hello world", "className");
  const expected = document.createElement("form");
  expected.className = "className";
  expect(actual).toHaveClass("className");
  expect(actual.innerText).toEqual("Hello world");
  expect(actual.outerHTML).toEqual('<form class="className"></form>');
});

test("testing form wrapper for dom element", () => {
  const actual = input("Hello world", "className");
  const expected = document.createElement("input");
  expected.className = "className";
  expect(actual).toHaveClass("className");
  expect(actual.innerText).toEqual("Hello world");
  expect(actual.outerHTML).toEqual('<input class="className">');
});
