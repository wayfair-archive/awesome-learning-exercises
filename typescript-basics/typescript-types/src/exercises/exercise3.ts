/*
📚 Exercise 3: Exhaustive Type Checking 📚

🛠️ We want to have a function that covers all 
🛠️️ possible input types with an output result. 
🛠️️ Please update the current function to add 
🛠️️ the right amount of cases based on the Fruit
🛠️ type so that we never hit the error case.
🛠️ Also, remove any cases that represent
🛠️ Fruit that aren't typed.
🛠️️ All tests should pass as well.

🛠️ The expected drink for an input of 'apple'
🛠️ would be 'Apple Juice'

💡 Leveraging TS types along with a switch 
💡 statement can give you confidence that you 
💡 have exhausted all possible inputs,
💡 thus preventing bugs from being introduced 
💡 into your code
*/

type Fruit = "banana" | "apple" | "none";

// "never" means this should never happen
// - if it does, an error will throw
// https://www.typescriptlang.org/docs/handbook/basic-types.html#never
const exhaustiveCheck = (): never => {
  throw new Error("should not reach here");
};

// 🚨 Update this function 🚨
export const makeDrink = (fruit: Fruit): string => {
  switch (fruit) {
    case "none":
      return "None - Choose a fruit base!";
    case "banana":
      return "Banana Smoothie";
    case "lemon":
      return "Lemonade";
    default:
      return exhaustiveCheck();
  }
};
