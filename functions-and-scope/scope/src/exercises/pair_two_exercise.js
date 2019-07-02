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

export function _require(moduleName) {
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
