import { preventMutations } from "/src/solutions/group_four_solution";

import { reset } from "/src/exercises/pair_two_exercise";
// import { reset } from "/src/solutions/pair_two_solution";

describe("Pair Exercise 2 - A better reset()", () => {
  it("does not change the original object", () => {
    const petDataCopy = {
      cats: ["whiskers", "mittens", "phoebe"],
      dogs: ["spot", "sebastian", "hank"],
      owners: {
        Bob: { cats: 1, dogs: 1 },
        Dan: { cats: 0, dogs: 1 },
        Sally: { cats: 1, dogs: 2 }
      }
    };
    const originalSnapshot = JSON.stringify(petDataCopy);
    const result = reset(petDataCopy);
    expect(originalSnapshot === JSON.stringify(petDataCopy)).toBe(true);
  });

  it("works with objects protected from mutation", () => {
    const petDataCopy = {
      cats: ["whiskers", "mittens", "phoebe"],
      dogs: ["spot", "sebastian", "hank"],
      owners: {
        Bob: { cats: 1, dogs: 1 },
        Dan: { cats: 0, dogs: 1 },
        Sally: { cats: 1, dogs: 2 }
      }
    };
    preventMutations(petDataCopy);
    const originalSnapshot = JSON.stringify(petDataCopy);
    const result = reset(petDataCopy);
    const expectedResult = JSON.stringify({ cats: [], dogs: [], owners: {} });
    expect(originalSnapshot === JSON.stringify(petDataCopy)).toBe(true);
    expect(expectedResult === JSON.stringify(result)).toBe(true);
  });
});
