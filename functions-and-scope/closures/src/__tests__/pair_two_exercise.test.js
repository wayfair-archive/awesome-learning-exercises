// Commenting out the import from exercise.js and using
// the import from solution.js should ensure that all tests pass.

import { counterFunc } from "/src/exercises/pair_two_exercise";
// import { counterFunc } from "/src/solutions/pair_two_solution";

describe("Pair exercise", () => {
  it("Increments, decrements, and returns a privately scoped counter and restricts access to its internals", () => {
    // Create two counters to demonstrate if counters are private
    const counterObj = counterFunc();
    const newCounterObj = counterFunc();

    // Test functionality of counterObj
    expect(counterObj.getCurrent()).toBe(0);

    // Testing increment
    counterObj.incrementCurrent();
    counterObj.incrementCurrent();
    expect(counterObj.getCurrent()).toBe(2);

    // Attempt to set value by manipulating internal variable
    counterObj.current = 45;
    // Look! It doesnt work
    expect(counterObj.getCurrent()).toBe(2);

    counterObj.decrementCurrent();
    expect(counterObj.getCurrent()).toBe(1);

    // Test if newCounterObj has been affected by these methods (it shouldn't be)
    expect(newCounterObj.getCurrent()).toBe(0);

    // Increment newCounterObj. Test if it increments properly and that it doesn't affect counterObj
    newCounterObj.incrementCurrent();
    expect(newCounterObj.getCurrent()).toBe(1);
    expect(counterObj.getCurrent()).toBe(1);
  });
});
