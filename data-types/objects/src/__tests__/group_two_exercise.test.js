import { empty } from "/src/exercises/group_two_exercise";
// import { empty } from "/src/solutions/group_two_solution";

describe("Group exercise 2 - emptying objects by reference", () => {
  it("correctly empties objects by reference", () => {
    const o = { a: "a", b: "b", c: "c" };
    empty(o);
    expect(Object.keys(o).length).toBe(0);
  });
  it("correctly empties arrays by reference", () => {
    const a = [1, 2, 3, 4, 5, 6];
    empty(a);
    expect(a.length).toBe(0);
  });
});
