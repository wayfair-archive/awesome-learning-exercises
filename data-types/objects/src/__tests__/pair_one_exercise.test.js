import { reset } from "/src/exercises/pair_one_exercise";
// import { reset } from "/src/solutions/pair_one_solution";

describe("Pair exercise 1 - Use clone & empty together", () => {
  it("creates a new object as a result", () => {
    const petDataCopy = {
      cats: ["whiskers", "mittens", "phoebe"],
      dogs: ["spot", "sebastian", "hank"],
      owners: {
        Bob: { cats: 1, dogs: 1 },
        Dan: { cats: 0, dogs: 1 },
        Sally: { cats: 1, dogs: 2 }
      }
    };
    const result = reset(petDataCopy);
    expect(result !== petDataCopy).toBe(true);
  });
  it("empties top level entries of an object", () => {
    const petDataCopy = {
      cats: ["whiskers", "mittens", "phoebe"],
      dogs: ["spot", "sebastian", "hank"],
      owners: {
        Bob: { cats: 1, dogs: 1 },
        Dan: { cats: 0, dogs: 1 },
        Sally: { cats: 1, dogs: 2 }
      }
    };
    const result = reset(petDataCopy);
    expect(result.cats.length).toBe(0);
    expect(result.dogs.length).toBe(0);
    expect(Object.keys(result.owners).length).toBe(0);
  });
});
