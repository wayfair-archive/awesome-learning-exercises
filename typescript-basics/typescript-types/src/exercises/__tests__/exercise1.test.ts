import { addTogether, TEST_NUM2 } from "../exercise1";

test("adding two items together, when typed, should result in a number", () => {
  expect(addTogether(5, TEST_NUM2)).toBe(15);
});
