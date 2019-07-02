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
