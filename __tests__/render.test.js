import "@testing-library/jest-dom";
import document from "./document.js";
import { render, renderOn, eleId, deleteId } from "../src/api/render.js";

test("test render function to append child with parent", () => {
  const div = document.createElement("div");
  const p = document.createElement("p");
  expect(render(div, p)).toBe(div);
  expect(div.innerHTML).toBe(p.outerHTML);
});

describe("testing higher order function renderON", () => {
  it("should return a function", () => {
    expect(typeof renderOn(div)).toBe("function");
  });
  const div = document.createElement("div");
  const p = document.createElement("p");

  const actual = renderOn(div);
  actual(p);
  expect(div.innerHTML).toBe(p.outerHTML);
});

test("test eleId function return an element with id", () => {
  const actual = eleId("content");
  const expected = document.getElementById("content");
  expect(actual).toBe(expected);
});

test("deleteId function removes a dom element", () => {
  deleteId("content");
  const actual = document.getElementById("content");
  expect(actual).toBe(undefined);
});
