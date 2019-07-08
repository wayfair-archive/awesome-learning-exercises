/*eslint-disable no-unused-expressions */


// Group Exercise 1.a

// Let's kick things off with examples of the basic scopes in JavaScript.
// And a local scope which is only accecible within the enclosed function
// JavaScript has a global scope which is accecible to ALL functions

// Take a look at the following code and assign the correct answers to the two
// VARIABLES (the ones in all caps) below to pass the exercise

var love = "What is love?";

(function() {
  love = "woah-woah-woah, oh, oh";
})();

(function() {
  var love = "Baby don't hurt me";
})();

// One of the functions above changes the local love, the other changes a global love...

// Assign the correct answers to the two variables below by assigning to the UPPERCASE CONSTATNS, what is the global & local?

// What is love? (the global version)
const WHAT_IS_GLOBAL_LOVE = "";

// What is love? (the local version)
const WHAT_IS_LOCAL_LOVE = "";

// FIN.

// Group Exercise 1.b
// So the difference above is that in one method we defined a variable and in the other we do not.
// So what is the result of this?
function noop() {}

(function(log) {
  log(love);

  var love = "No more";
})(noop);

// QUESTION - Answer the question by assigning the correct value to UPPER_CASE CONSTANT below
// What is the logged love? (the hoisted version)
const WHAT_IS_HOISTED_LOVE = "";

// Explain in words why the value is what it is.

// TIP: Replace the noop method with console.log to see the answer if you are stuck.

// What this exercise demonstrates is "hoisting" in JavaScript. In JavaScript every variable declared in a function is "hosited" to the top of the function
// no matter where in the function it is defined.

// (OPTIONAL) - rewrite the method to show what is really happening

// FIN

// Group Exercise 1.c
// ES6 Syntax introduced two new ways to declare variables with let and const keywords. let & const also introduce BLOCK SCOPE

// Take a look at the code below and assign WHAT_IS_BLOCK_LOVE to the value logged
(function(log) {
  love = "What is love?";
  if (true) {
    let love = "No more";
  }
  log(love);
})(noop);

// QUESTION - Answer the question by assigning the correct value to UPPER_CASE CONSTANT below
// What is logged love? (the block scope version)
const WHAT_IS_BLOCK_LOVE = "";



// Pair Exercise #1

// Refactor the variable types and scopes of the following code block so that whoStoleTheCookies() returns the value of fingerprints in its original scope.

// Note: whoseFingerprintsAreOnItNow() already returns the value of fingerprints in the global scope.
//       Make sure you don't accidentally change that.

var whoStoleTheCookies;
var whoseFingerprintsAreOnItNow;

{
  var fingerprints = "Cookie Monster";
  whoStoleTheCookies = function() {
    return fingerprints;
  };
}

var fingerprints = "You!"; // Cookie Monster sneakily replaces his fingerprints with yours. Don't actually do this in your day-to-day work!
whoseFingerprintsAreOnItNow = function() {
  return fingerprints;
};



// Pair Exercise #2

// Let's put it all together to see how scope is useful when applied to a very common problem in JavaScript, MODULES.
// All of the code is executed in GLOBAL scope in JavaScript, only when we define methods is when we create additional scopes.
// When we have thousands of JavaScript files like we do in our codebase eventually we will run into variable collisions as
// files re-define variables with common names like "x" or "i". But if we utilize JavaScript scope creatively we can overcome
// this problem!

// The goal of this exercise is to scope the two methods below to produce the correct result

// SETUP CODE
var module = {};
var modules = {};

// Imagine we have two separate 3 different files represented below with comment

// Our require method will use this object to map a module to it's exports, use this as
// a clue on how to solve this problem!

// Remove this when writing your solution
function noop() {}

var nameToModule = {
  accumulator_module: noop, // clue
  add2_module: noop, // clue
  main: noop // clue
};

// END SETUP

// FILE: accumulator_module.js
// This module returns a function which accumulates values passed into it and returns the result
var result = 0;
module.exports = function(value) {
  return (result += value);
};
// END FILE accumulator_module.js

// FILE: add2_module.js
// This module returns a function which adds 2 to a value passed in
module.exports = function(value) {
  return (value += 2);
};
// END FILE add2_module.js

// FILE: main.js
// Our main module for the page should accumulate some stuff
var accumulator = _require("accumulator_module");
var addTwo = _require("add2_module");

var result = accumulator(2);
result = accumulator(2);

// should be six
module.exports = addTwo(result);

// END FILE main.js

// Here is our require method we see used above, it's mostly complete for our purpose
// fix it to make sure a new module is created correctly by creating a correct scope
// for each module.

// CHANGE nameToModule HERE

function _require(moduleName) {
  if (modules[moduleName]) {
    return modules[moduleName].exports;
  }

  // Hmmm
  var mod = { exports: noop };
  // HMMMMMMMMMMMMMM.....
  nameToModule[moduleName](mod);
  // Interesting...
  modules[moduleName] = mod;

  return modules[moduleName].exports;
}

// EXERCISE TODOs
// 1 - Make sure each file above is a module by creating a scope for each one
// 2 - Make sure each file/module has access to it's own "module" object
// 3 - Make sure the result of _require('main') return the number 6!

// The test will call _require('main') and expect it to return the number 6
