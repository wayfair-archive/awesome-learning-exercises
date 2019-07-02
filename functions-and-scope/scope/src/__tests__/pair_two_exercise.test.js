import { _require } from "/src/exercises/pair_two_exercise";
// import { _require } from "/src/solutions/pair_two_solution";

describe("Pair exercise 2", () => {
  it("_require('main') should result in the number 6", () => {
    expect(_require("main")).toBe(6);
  });
});
