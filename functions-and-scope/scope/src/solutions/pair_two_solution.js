// Pair Exercise #2 - ADVANCED

// Let's put it all together to see how scope is useful when applied to a very common problem in JavaScript, MODULES.
// All of the code is executed in GLOBAL scope in JavaScript, only when we define methods is when we create additional scopes.
// When we have thousands of JavaScript files like we do in our codebase eventually we will run into variable collisions as
// files re-define variables with common names like "x" or "i". But if we utilize JavaScript scope creatively we can overcome
// this problem!

// The goal of this exercise is to scope the two methods below to produce the correct result

// Imagine we have two separate 3 different files represented below with comment

// SETUP CODE (IGNORE FOR NOW)
function noop() {}

var module = {};
var modules = {};
// END SETUP

// NOTE TO TEACHER/DRIVER: The "student" version of this exercise does any have any wrappers around the logic which is meant to be
//                         in an individual file(s). This is the main purpose of the exercise, for students to understand that by
//                         wrapping the different file logic in their methods we create an entire module system!

// SEE EXAMPLE BELOW FOR THE "BROKEN" EXAMPLE

// FILE: accumulator_module.js
// This module returns a function which acumulates values passed into it and returns the result
function accumulator_module(module) {
  var result = 0;
  module.exports = function(value) {
    return (result += value);
  };
}

// BROKEN/STUDENT LOGIC
// var result = 0;
// module.exports = function (value) {
//   return result += value;
// }
// The reason it is broken is because it conflicts with other file_*.js code since no individual file has a private scope

// END FILE accumulator_module.js

// FILE: add2_module.js
// This module returns a function which adds 2 to a value passed in
function add2_module(module) {
  module.exports = function(value) {
    return (value += 2);
  };
}
// END FILE add2_module.js

// FILE: main.js
// Our main module for the page should accumulate some stuff
function main_module(module) {
  var accumulator = _require("accumulator_module");
  var addTwo = _require("add2_module");

  var result = accumulator(2);
  result = accumulator(2);

  // should be six
  module.exports = addTwo(result);
}
// END FILE main.js

// Here is our require method we see used above, it's mostly complete for our purpose
// fix it to make sure a new module is created correctly by creating a correct scope
// for each module.

// Our require method will use this object to map a module to it's exports, use this as
// a clue on how to solve this problem!
var nameToModule = {
  accumulator_module: accumulator_module,
  add2_module: add2_module,
  main: main_module
};

export function _require(moduleName) {
  if (modules[moduleName]) {
    return modules[moduleName].exports;
  }

  var mod = { exports: noop };
  nameToModule[moduleName](mod);
  modules[moduleName] = mod;

  return modules[moduleName].exports;
}

// EXERCISE TODOs
// 1 - Make sure each file above is a module by creating a scope for each one
// 2 - Make sure each file/module has access to it's own "module" object
// 3 - Make sure the result of _require('main') return the number 6!

// The test will call _require('main') and expect it to return the number 6
