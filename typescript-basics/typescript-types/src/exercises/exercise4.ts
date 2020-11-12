/*
Bonus Exercise
📚 Exercise 4: Generics 📚

🛠️ In this exercise, the goal is to type the
🛠️ function with generics. TypeScript generics
🛠️ allow for a function to be multipurpose - 
🛠️ it can expect a different type of input based
🛠️ on the way the function is typed when it is 
🛠️ invoked.

💡 Update this function to leverage generics
💡 A developer should be able to add together
💡 different types, such as strings or numbers
Arrow functions & Generics: https://stackoverflow.com/a/45576880

Take a look at the test file to see how Generics
are leveraged in the implemenation of addAllTogether
 */

// After updating the function with Generics, please update
// this value to 0 for testing purposes
export const INITIAL_NUMBER = undefined;
// After updating the function with Generics, please update
// this value to "" for testing purposes
export const INITIAL_STRING = undefined;

export const addAllTogether = (
  array: Array<number>,
  initialValue: number
): number => {
  return array.reduce((sum, value) => sum + value, <any>initialValue);
};
