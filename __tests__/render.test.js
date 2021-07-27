import "@testing-library/jest-dom";
import document from "./document.js";
import { render, renderOn } from "../src/api/render.js";

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
  actual(p);

  it("should return a function", () => {
    expect(typeof renderOn(div)).toBe("function");
  });

  expect(div.innerHTML).toBe(p.outerHTML);
});
