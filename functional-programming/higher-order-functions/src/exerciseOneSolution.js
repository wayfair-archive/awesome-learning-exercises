/*
 * Our implementation of all functions is below. Please
 * scroll down to see the really gorgeous versions of the
 * main function we've been refactoring
 */

function multiplyByN(element, n) {
  return element * n;
}

function multiplyByTwo(element) {
  return multiplyByN(element, 2);
}

function multiplyByThree(element) {
  return multiplyByN(element, 3);
}

function applyCallback(arr, callback) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }

  return result;
}

function sum(numOne, numTwo) {
  return numOne + numTwo;
}

function reducer(arr, callback, initialValue) {
  let result = initialValue;

  for (let i = 0; i < arr.length; i++) {
    result = callback(result, arr[i]);
  }

  return result;
}

function isEven(number) {
  return number % 2 === 0;
}

function filter(array, callback) {
  const a = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      a.push(array[i]);
    }
  }

  return a;
}

/****************************
 ****************************
 ** GORGEOUS VERSIONS!!!!! **
 ****************************
 ****************************/

/*
 * This function makes use of all the functions we've written
 * to remove pretty much all of the local variables.
 *
 * This is one of the really nice features of functional programming,
 * is that because everything is pure, you can directly replace
 * the result of a function call with the function call itself.
 *
 * We could argue for days on whether this particular function is
 * more or less readable than the version with local variables,
 * but that's beside the point at the moment.
 *
 * The point here is that you CAN compose functions in this way
 * and it is a _SAFE_ thing to do. When doing Object Oriented
 * Programming, this is not always the case.
 *
 * Keep reading below to see how we can actually write this function
 * in an extremely readable way.
 */
function allTogether() {
  var intsArray = [1, 2, 3, 4, 5];

  return {
    intsSum: reducer(intsArray, sum, 0),
    doubleSum: reducer(applyCallback(intsArray, multiplyByTwo), sum, 0),
    tripleSum: reducer(applyCallback(intsArray, multiplyByThree), sum, 0),
    evensSum: reducer(filter(intsArray, isEven), sum, 0),
  };
}

// console.log("allTogether", allTogether());

/*
 * Most modern programming languages, including JavaScript, already
 * have this functionality baked into the language itself. So,
 * we can actually replace the methods we've created with the methods
 * that exist on the Array prototype itself (map, filter, and reduce).
 *
 * We hope that by having written these methods from scratch,
 * you have a better understanding of the internals of these methods
 * and how they work to make code cleaner and easier to read.
 *
 * While it's not directly related to Functional Programming, one of
 * the nice things about JavaScript is that you can chain these methods
 * together: a.b().c() instead of c(b(a))
 *
 * This makes things a bit easier to follow since you don't have to
 * match up as many parentheses, and hopefully you agree that the
 * function below is extremely readable, and, most importantly,
 * functional and pure!
 */
function final() {
  var intsArray = [1, 2, 3, 4, 5];

  return {
    intsSum: intsArray.reduce(sum, 0),
    doubleSum: intsArray.map(multiplyByTwo).reduce(sum, 0),
    tripleSum: intsArray.map(multiplyByThree).reduce(sum, 0),
    evensSum: intsArray.filter(isEven).reduce(sum, 0),
  };
}

console.log("correct result", final());
