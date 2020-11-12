import { addAllTogether, INITIAL_NUMBER, INITIAL_STRING } from "../exercise4";

test("It can add numbers together", () => {
  expect(addAllTogether<number>([1, 2, 3], INITIAL_NUMBER)).toBe(6);
});

test("It can append strings together", () => {
  expect(
    addAllTogether<string>(
      ["Pineapple", "Is", "Good", "On", "Pizza"],
      INITIAL_STRING
    )
  ).toBe("PineappleIsGoodOnPizza");
});
