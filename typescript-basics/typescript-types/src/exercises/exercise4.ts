/*
Bonus Exercise
📚 Exercise 4: Generics 📚

🛠️ In this exercise, the goal is to type the
🛠️ function with generics. TypeScript generics
🛠️ allow for a function to be multipurpose - 
🛠️ it can expect a different type of input based
🛠️ on the way the function is typed when it is 
🛠️ invoked.

💡 Update this function to leverage generics!
💡 A developer should be able to "mash" together
💡 two items of different types, such as strings or numbers
💡 this mash function should take in params
💡 and return a single Map() where the key
💡 is the first param, and the value is the second param. 

💡 Example:
💡 mash<string, number>("hello", 123) -> {hello: 123}
💡 mash<number, string>(123, "test") -> {123: "test"}

💡 By using generics, we can confirm that the first input
💡 param is the same type as the output key, and the second
💡 input is the same type as the output value,
💡 no matter what these values are! This shows
💡 a good use case for generics, which is to 
💡 help developers confirm that the input type
💡 and output type are of the same time, without
💡 that type having to be explicitly defined. 
Arrow functions & Generics: https://stackoverflow.com/a/45576880
 */

// After updating the function with Generics, please update
// this value to 10 for testing purposes
export const NUMBER_TO_MASH = undefined;
// After updating the function with Generics, please update
// this value to "Hello" for testing purposes
export const STRING_TO_MASH = undefined;

export const mash = (key, value) => {
  const map = new Map();
  map.set(key, value);
  return map;
};
