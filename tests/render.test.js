import { eleId } from "../src/api/render";

test("test eleId return an Dom element with id", () => {
  expect(eleId("content")).toBe(document.getElementById("content"));
});
