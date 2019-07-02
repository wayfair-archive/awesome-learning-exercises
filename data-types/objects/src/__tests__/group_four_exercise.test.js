// import { preventMutations } from "/src/exercises/group_four_exercise";
import { preventMutations } from "/src/solutions/group_four_solution";

describe("Group exercise 4 - Preventing mutation", () => {
  it("prevents an object from being changed", () => {
    const o = { a: "a" };
    preventMutations(o);
    o.a = "b";
    expect(o.a === "a").toBe(true);
  });
});
