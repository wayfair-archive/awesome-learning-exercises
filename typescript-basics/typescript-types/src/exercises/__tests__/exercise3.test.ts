import { makeDrink } from "../exercise3";

test("Making a drink with an Apple gives a valid result", () => {
  expect(makeDrink("apple")).toBe("Apple Juice");
});
