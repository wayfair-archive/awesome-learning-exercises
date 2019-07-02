// Object Reference and pass by reference

// This is a multi step exercise which should help us build a good mental model of how object references work in JavaScript

// Group exercise 2 - Emptying an Object by using it's reference

// In this exercise, implement the body for the function below empty() which empties an object which is passed into it.
// It must empty ALL OBJECTS (remember what type is an array?)
function empty(obj) {
  if (Array.isArray(obj)) {
    obj.length = 0;
  } else {
    Object.keys(obj).forEach(key => {
      delete obj[key];
    });
  }

  return obj;
}

export { empty };
