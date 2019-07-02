// Pair exercise 2 introduction:
// Consider the following counter object used in an appllication. This object can be used in multiple functions, right?
const counterObj = {
  current: 0,
  incrementCurrent() {
    this.current++;
  },
  decrementCurrent() {
    this.current--;
  }
};
// Uncomment each of the following lines one by one.
// Before your do, guess what will be logged from each function call. Make sure to talk about why you think your guess is right.

// console.log(counterObj.current)
// counterObj.incrementCurrent()
// console.log(counterObj.current)
// counterObj.decrementCurrent()
// console.log(counterObj.current)
// counterObj.current = 45;
// console.log(counterObj.current) // <- not ideal. But Why?

// Exercise 2:
/*
Write a function called counterFunc that recreates this counter functionality, but with private scope. This counter function should restrict access to it's internals via closure, and expose an incrementCurrent, decrementCurrent, and getCurrent api. 
*/
export function counterFunc() {
  let current = 0;
  return {
    getCurrent: () => {
      return current;
    },
    incrementCurrent: () => {
      current++;
    },
    decrementCurrent: () => {
      current--;
    }
  };
}
