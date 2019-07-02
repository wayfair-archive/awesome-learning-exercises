import {
  WHAT_IS_GLOBAL_LOVE,
  WHAT_IS_LOCAL_LOVE,
  WHAT_IS_HOISTED_LOVE,
  WHAT_IS_BLOCK_LOVE
} from "/src/exercises/group_one_exercise";
// import { WHAT_IS_GLOBAL_LOVE, WHAT_IS_LOCAL_LOVE, WHAT_IS_HOISTED_LOVE, WHAT_IS_BLOCK_LOVE } from "/src/solutions/group_one_solution";

describe("Group exercises", () => {
  it("Global scope answer is correct", () => {
    expect(WHAT_IS_GLOBAL_LOVE === "woah-woah-woah, oh, oh").toBe(true);
  });
  it("Local scope answer is correct", () => {
    expect(WHAT_IS_LOCAL_LOVE === "Baby don't hurt me").toBe(true);
  });
  it("Local variables shadowing the global", () => {
    expect(WHAT_IS_HOISTED_LOVE === undefined).toBe(true);
  });
  it("Block scoped variables", () => {
    expect(WHAT_IS_BLOCK_LOVE === "What is love?").toBe(true);
  });
});
