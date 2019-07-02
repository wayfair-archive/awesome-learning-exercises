import { arrayTypeAnswer, isArray } from "/src/exercises/group_one_exercise";
// import { arrayTypeAnswer, isArray } from "/src/solutions/group_one_solution";

describe("Group Exercise 1 - Arrays", () => {
  it("has correct answer for array type", () => {
    expect(arrayTypeAnswer === typeof []).toBe(true);
  });
  it("has correct implementation of isArray", () => {
    expect(isArray([])).toBe(true);
    expect(isArray({ length: 0 })).toBe(false);
  });
});
