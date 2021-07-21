/*
 * The code below has a number of issues. It's pretty
 * imperative in style, and aside from a number of repeated
 * code blocks, it's also mixing concerns.
 *
 * We're going to make it more functional.
 * Read through the function, and then scroll to the
 * next comment for instructions.
 */

function initialFunction() {
  var intsArray = [1, 2, 3, 4, 5];
  var doubleArray = [];
  var tripleArray = [];
  var evensArray = [];
  var intsSum = 0;
  var doubleSum = 0;
  var tripleSum = 0;
  var evensSum = 0;

  for (var i = 0; i < intsArray.length; i++) {
    var doubled = intsArray[i] * 2;
    doubleArray.push(doubled);
  }

  for (i = 0; i < intsArray.length; i++) {
    var tripled = intsArray[i] * 3;
    tripleArray.push(tripled);
  }

  for (i = 0; i < intsArray.length; i++) {
    var isEven = intsArray[i] % 2 === 0;
    if (isEven) {
      evensArray.push(intsArray[i]);
    }
  }

  for (i = 0; i < intsArray.length; i++) {
    intsSum += intsArray[i];
  }

  for (i = 0; i < doubleArray.length; i++) {
    doubleSum += doubleArray[i];
  }

  for (i = 0; i < tripleArray.length; i++) {
    tripleSum += tripleArray[i];
  }

  for (i = 0; i < evensArray.length; i++) {
    evensSum += evensArray[i];
  }

  return {
    intsSum,
    doubleSum,
    tripleSum,
    evensSum,
  };
}

console.log("initialFunction", initialFunction());

/*
 * The code in initialFunction is not DRY. Let's work on that!
 * (DRY stands for "Don't Repeat Yourself" - it just means that we
 * have repeated code blocks)
 *
 * Implement some simple callback functions to handle multiplication
 *
 * Then, write a higher order function called applyCallback
 * which takes in an array and a callback function.
 *
 * applyCallback should return a new array that contains the
 * elements after the callback is applied to each element
 *
 * Uncomment the console.log to make sure you get the same result
 */

function multiplyByN(element, n) {
  return element * n;
}

function multiplyByTwo(element) {
  // your code here
  // use multiplyByN
  return 0;
}

function multiplyByThree(element) {
  // your code here
  // use multiplyByN
  return 0;
}

function applyCallback(arr, callback) {
  // your code here!
  return [];
}

function withApplyCallback() {
  var intsArray = [1, 2, 3, 4, 5];
  var evensArray = [];
  var intsSum = 0;
  var doubleSum = 0;
  var tripleSum = 0;
  var evensSum = 0;

  var doubleArray = applyCallback(intsArray, multiplyByTwo);
  var tripleArray = applyCallback(intsArray, multiplyByThree);

  for (var i = 0; i < intsArray.length; i++) {
    var isEven = intsArray[i] % 2 === 0;
    if (isEven) {
      evensArray.push(intsArray[i]);
    }
  }

  for (i = 0; i < intsArray.length; i++) {
    intsSum += intsArray[i];
  }

  for (i = 0; i < doubleArray.length; i++) {
    doubleSum += doubleArray[i];
  }

  for (i = 0; i < tripleArray.length; i++) {
    tripleSum += tripleArray[i];
  }

  for (i = 0; i < evensArray.length; i++) {
    evensSum += evensArray[i];
  }

  return {
    intsSum,
    doubleSum,
    tripleSum,
    evensSum,
  };
}

// console.log("withApplyCallback", withApplyCallback());

/*
 * We're still not DRY. We're repeating the for loop that's doing
 * all the addition.
 *
 * However, that one is a bit more complicated, so applyCallback
 * doesn't quite work.
 *
 * Write a new function, called "reducer", which takes in an array,
 * a callback function, and a starting value.
 *
 * The arguments to the callback function will be the result of
 * the previous iteration (starting with initial value), and the
 * current element
 *
 * Once finished, uncomment the console.log to make sure you
 * get the same result as initialFunction
 */

function sum(numOne, numTwo) {
  return numOne + numTwo;
}

function reducer(arr, callback, initialValue) {
  // Your code here!
  return null;
}

function withReducer() {
  var intsArray = [1, 2, 3, 4, 5];
  var evensArray = [];

  var doubleArray = applyCallback(intsArray, multiplyByTwo);
  var tripleArray = applyCallback(intsArray, multiplyByThree);

  for (var i = 0; i < intsArray.length; i++) {
    var isEven = intsArray[i] % 2 === 0;
    if (isEven) {
      evensArray.push(intsArray[i]);
    }
  }

  var intsSum = reducer(intsArray, sum, 0);
  var doubleSum = reducer(doubleArray, sum, 0);
  var tripleSum = reducer(tripleArray, sum, 0);
  var evensSum = reducer(evensArray, sum, 0);

  return {
    intsSum,
    doubleSum,
    tripleSum,
    evensSum,
  };
}

// console.log("withReducer", withReducer());

/*
 * Alright, well now that last for loop just looks out of place.
 * Let's write one more higher order function, called "filter".
 *
 * filter will take in an array and a callback. It will return a
 * new array that contains only the elements that return true
 * when passed into the callback function
 *
 * Again, uncomment the console.log to make sure you get the
 * same result
 */

function isEven(number) {
  return number % 2 === 0;
}

function filter(array, callback) {
  // Your code here!
  return [];
}

function withFilter() {
  var intsArray = [1, 2, 3, 4, 5];

  var doubleArray = applyCallback(intsArray, multiplyByTwo);
  var tripleArray = applyCallback(intsArray, multiplyByThree);

  var evensArray = filter(intsArray, isEven);

  var intsSum = reducer(intsArray, sum, 0);
  var doubleSum = reducer(doubleArray, sum, 0);
  var tripleSum = reducer(tripleArray, sum, 0);
  var evensSum = reducer(evensArray, sum, 0);

  return {
    intsSum,
    doubleSum,
    tripleSum,
    evensSum,
  };
}

// console.log("withFilter", withFilter());

/*
 * Great! Congratulations. You've finished the exercise.
 *
 * Please head over to src/exerciseOneSolution.js
 * for some closing comments and final thoughts.
 */
