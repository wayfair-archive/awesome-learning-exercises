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
export const WHAT_IS_GLOBAL_LOVE = "woah-woah-woah, oh, oh";

// What is love? (the local version)
export const WHAT_IS_LOCAL_LOVE = "Baby don't hurt me";

// FIN.

// Group Exercise 1.b
// So the difference above is that in one method we defined a variable and in the other we do not.
// So what is the result of this?
function noop() {}

// Here we are going to
(function(log) {
  log(love);

  var love = "No more";
})(noop);

// QUESTION - Answer the question by assigning the correct value to UPPER_CASE CONSTANT below
// What is the logged love? (the hoisted version)
export const WHAT_IS_HOISTED_LOVE = undefined;

// TIP: Replace the noop method with console.log to see the answer if you are stuck.

// What this exercise demonstrates is "hoisting" in JavaScript. In JavaScript every variable declared in a function is "hosited" to the top of the function
// no matter where in the function it is defined. This

// (OPTIONAL) - rewrite the method to show what is really happening
(function(log) {
  var love = undefined;
  log(love);

  love = "No more";
})(noop);
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
export const WHAT_IS_BLOCK_LOVE = "What is love?";
