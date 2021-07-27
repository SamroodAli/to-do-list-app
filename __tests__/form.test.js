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

test("testing form wrapper for dom element", () => {
  const actual = textArea("Hello world", "className");
  const expected = document.createElement("textArea");
  expected.className = "className";
  expect(actual).toHaveClass("className");
  expect(actual.innerText).toEqual("Hello world");
  expect(actual.outerHTML).toEqual('<textarea class="className"></textarea>');
});

test("testing form wrapper for dom element", () => {
  const actual = label("Hello world", "className");
  const expected = document.createElement("label");
  expected.className = "className";
  expect(actual).toHaveClass("className");
  expect(actual.innerText).toEqual("Hello world");
  expect(actual.outerHTML).toEqual('<label class="className"></label>');
});

test("testing form wrapper for dom element", () => {
  const actual = option("Hello world", "className");
  const expected = document.createElement("option");
  expected.className = "className";
  expect(actual).toHaveClass("className");
  expect(actual.innerText).toEqual("Hello world");
  expect(actual.outerHTML).toEqual('<option class="className"></option>');
});
