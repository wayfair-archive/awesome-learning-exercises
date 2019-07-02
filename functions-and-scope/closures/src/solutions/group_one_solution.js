// Group Exercise 1

// Create a function addByX that returns a function that will add an input by x and log the result
export function addByX(x) {
  return y => {
    return x + y;
  };
}

/*
Carefully examine the following function. Think carefully about the variable environment of outer and what incrementCounter has access to when outer is executed. Talk through what you think this function does. When you have finished discussing what this function does, follow the instructions after the function definition 
*/
function outer() {
  let counter = 0;
  function incrementCounter() {
    counter++;
    return counter;
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of the following lines one by one.
// Before your do, guess what will be logged from each function call. Make sure to talk about why you think your guess is right. Be careful to use the proper terminology from your pre-read.

// willCounter();
// willCounter();
// willCounter();

// jasCounter(); // really think about this one
// willCounter();

// I would suggest re-commenting these ^^ when you are done
