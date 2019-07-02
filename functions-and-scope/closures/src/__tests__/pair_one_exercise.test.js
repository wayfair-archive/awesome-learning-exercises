import { addByX } from "/src/helpers";

import { once } from "/src/exercises/pair_one_exercise";
// import { once } from "/src/solutions/pair_one_solution";

describe("Pair exercise", () => {
  it("Calls the callback once, and returns the first call's result in any subsequent calls", () => {
    const onceFunc = once(addByX(2));

    expect(onceFunc(4)).toBe(6);

    expect(onceFunc(10)).toBe(6);

    expect(onceFunc(9001)).toBe(6);
  });
});
