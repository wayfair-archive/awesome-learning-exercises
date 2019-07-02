import { clone } from "/src/exercises/group_three_exercise";
// import { clone } from "/src/solutions/group_three_solution";

describe("Group exercise 3 - Cloning with clone()", () => {
  it("can clone objects correctly", () => {
    const o = {};
    expect(clone(o) !== o).toBe(true);
  });
  it("can clone arrays correctly", () => {
    const a = [];
    expect(Array.isArray(clone(a)) && clone(a) !== a).toBe(true);
  });
});
