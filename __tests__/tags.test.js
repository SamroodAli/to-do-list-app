import "@testing-library/jest-dom";
import {
  div,
  section,
  header,
  main,
  footer,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span,
  ul,
  li,
  nav,
  a,
  button,
  img,
} from "../src/api/tags.js";

test("testing div wrapper for dom element", () => {
  const actual = div("Hello world", "className");
  const expected = document.createElement("div");
  expected.className = "className";
  expect(actual).toHaveClass("className");
  expect(actual.innerText).toEqual("Hello world");
  expect(actual.outerHTML).toEqual('<div class="className"></div>');
});

test("testing div wrapper for dom element", () => {
  const actual = div("Hello world", "className");
  const expected = document.createElement("div");
  expected.className = "className";
  expect(actual).toHaveClass("className");
  expect(actual.innerText).toEqual("Hello world");
  expect(actual.outerHTML).toEqual('<div class="className"></div>');
});