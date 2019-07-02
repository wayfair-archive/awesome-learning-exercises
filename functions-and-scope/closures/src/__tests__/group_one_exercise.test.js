import { addByX } from "/src/exercises/group_one_exercise";
// import { addByX } from "/src/solutions/group_one_solution";

describe("Group exercise 1", () => {
  it("Returns a function that when called, adds an input by x", () => {
    const addByTwo = addByX(2);
    expect(addByTwo(1)).toBe(3);

    const addByThree = addByX(3);
    expect(addByThree(2)).toBe(5);

    const addByFour = addByX(4);
    expect(addByFour(3)).toBe(7);
  });
});
