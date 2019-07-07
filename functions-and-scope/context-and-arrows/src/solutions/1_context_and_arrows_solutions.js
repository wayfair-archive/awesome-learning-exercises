// Let's get introduced to how context works

// NOTE: To do this exercise have the MDN docs for .bind .call and .apply handy!

// Group Exercise intro and setup

// The robot consturctor function. Each robot will be called with a name arguments which belongs to the Robot instance
function Robot(name) {
  // Use the name function argument to attach the name property to the context/this object of each Robot
  this.name = name; // this will be deleted in the example

  // Each robot has it's own quote method which should return the quote from the list below
  this.quote = function() {
    return "";
  };
}

// Use this helper method to help each Robot quote itself
// Notice the use of the "this" object inside the method.
// "this" is the DYNAMIC portion of the function, other than the arguments. (We will constrast this with scope in the next session)
function speak(message) {
  // This is where JavaScript can get _weird_ we have a method defined outside any class or context but it can use "this" all the same!
  // This is surprising and strange to see coming from traditional OOP languages!
  return this.name + " says: " + message;
}

// Here we have all of our robots
export const voltron = new Robot("Voltron");
export const bender = new Robot("Bender");
export const optimus = new Robot("Optimus Prime");

// ...and their quotes
export const quotes = {
  voltron: "Defenders of the Universe.",
  bender:
    "Blackmail's such an ugly word. I prefer extortion. The X makes it sound cool.",
  optimus: "There's a thin line between being a hero and being a memory."
};

// Group Exercise:
//
//   Given the robots objects above, attach the speak() function to each object such that
//
// . * speak function MUST BE USED
//   * when robot.quote() is called, each one utters the correct quote
//   * robot.quote() does not require any arguments

// TEACHER NOTE: In the broken/student version all of the bellow .quote methods are not assigned

// Use the .bind method to attach the correct quote to voltron
// Solution
voltron.quote = speak.bind(voltron, quotes.voltron);

// Use the .call method to attach the correct quote to bender
// Solution
bender.quote = function() {
  return speak.call(this, quotes.bender);
};

// Use the .apply method to attach the correct quote to optimus
// Solution
optimus.quote = function() {
  return speak.apply(this, [quotes.optimus]);
};


/**
 * Enter the ARROW FUNCTION
 *
 * The arrow funcitons on their own are not very interesting.
 * They are not necessary to write JavaScript, traditional functions
 * are just fine. On their own the arrow functions would not be a very
 * interesting topic, but when contrasted with the semantics of traditional
 * context binding we can show _how_ they are different and why we use them.
 */

// Arrow Functions Are different...

// 1) Arrow functions have their context bound lexically! What does that mean?
//    It means that the context, which before arrow functions was dynamic now becomes
//    a static concept when we are discussing arrows. An arrow function always inherits
//    the context of the function it was defined in (or global)

// 3) Arrow _may_ have concise bodies, or a body without { } curly braces. This is only valid when
//    a function only contains a single expression. const foo = x => x > 2 ? x : 0;

// 2) Arrow functions introduce the concept of implicit returns with concise bodies
// .  const implicit = x => x // this returns "x"

// Pair exercise problem

// Notifier is a factory which returns an Object with a .on and a .trigger methods
// It allows for setting up listeners to events with .on and triggering of them with .trigger
// The way it's implemented isn't ideal, it makes heavy use of context internally. The challenge
// of this exercise is to re-write this logic to use arrow functions to simplify a lot of the
// internal logic which uses .bind to keep track of events and callbacks.

// THIS IS THE STUDENT VERSION
// function Notifier() {
//   this.callbacks = {};
//   this.data = null;

//   // Trigger an event with a string(event) and a data object
//   const trigger = function(event, data) {
//     if (!this.callbacks[event]) {
//       return;
//     }

//     this.data = data;

//     // This is an old trick of ES5 of saving the current context(this) into a different variable
//     // and then referncing it later.
//     const self = this;
//     this.callbacks[event].forEach(function(cb) {
//       setTimeout(cb.bind(self));
//     });
//   }.bind(this);

//   const on = function(eventName, callback) {
//     if (!this.callbacks[eventName]) {
//       this.callbacks[eventName] = [];
//     }
//     this.callbacks[eventName].push(callback);
//   }.bind(this);

//   return { trigger, on };
// }

// Rewrite the above code so that .on and .trigger no longer use .bind() methods by using arrow functions.

// Pair exercise solution
export function Notifier() {
  const callbacks = {};
  this.data = null;

  const trigger = (event, data) => {
    if (!callbacks[event]) {
      return;
    }
    this.data = data;
    callbacks[event].forEach(cb => {
      // We still use .call for each callback but notice how this works with arrow functions!
      // We are able to drop all the .bind calls from our methods because arrow functions have *lexical context binding
      // They bind to the correct this object by simply beind _defined_ in a specific function. NEAT!
      setTimeout(() => {
        cb.call(this);
      });
    });
  };

  const on = (event, callback) => {
    if (!callbacks[event]) {
      callbacks[event] = [];
    }
    callbacks[event].push(callback);
  };

  return { trigger, on };
}

export const ENABLE_BONUS_EXERCISE = false;
