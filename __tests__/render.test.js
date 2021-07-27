import "@testing-library/jest-dom";
import document from "./document.js";
import { render } from "../src/api/render.js";

test("test render function to append child with parent", () => {
  const div = document.createElement("div");
  const p = document.createElement("p");
  expect(render(div, p)).toBe(div);
  expect(div.innerHTML).toBe(p.outerHTML);
});
