import "@testing-library/jest-dom";
import document from "./document.js";
import { render, renderOn, renderOnId } from "../src/api/render.js";

test("test render function to append child with parent", () => {
  const div = document.createElement("div");
  const p = document.createElement("p");
  expect(render(div, p)).toBe(div);
  expect(div.innerHTML).toBe(p.outerHTML);
});

describe("testing higher order function renderON", () => {
  const div = document.createElement("div");
  const p = document.createElement("p");
  const actual = renderOn(div);

  it("should return a function", () => {
    expect(typeof renderOn(div)).toBe("function");
  });

  actual(p);
  expect(div.innerHTML).toBe(p.outerHTML);
});

describe("testing higher order function renderId", () => {
  const content = document.getElementById("content");
  it("should return a function", () => {
    expect(typeof renderOnId(content)).toBe("function");
  });
});
