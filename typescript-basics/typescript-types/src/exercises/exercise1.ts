/*
📚 Exercise 1: The difference between 
   Vanilla JS and TypeScript 📚

🛠️ Update the input and output types 
🛠️️ of addTogether to make sure we're 
🛠️️ always adding two numbers together, 
🛠️ returning a result of a number

🛠️ Please also change the TEST_NUM2 value 
🛠️️ to be a number once you've typed your 
🛠️️ code, so the tests evaluate correctly!

💡 Typing this function helps demonstrate
💡 how you can limit the output of your code 
💡 to smaller subsets of all possible results.
 
💡 After you update addTogether, any invalid 
💡 parameters whenever this function is used 
💡 should show up in your IDE, so that 
💡 you're immediately aware that function 
💡 parameters are invalid. 

💡 This also gives us 100% confidence 
💡 in the values that will come back 
💡 from our function call

💡 Note on editors and TypeScript:
💡 Editors like VS Code (and CodeSandbox)
💡 have built in TypeScript type-hinting
💡 which is why you see items already
💡 underlined in red below (showing that 
💡 something needs to be resolved type wise)
*/

export const TEST_NUM2 = "10";

export const addTogether = (num1, num2) => {
  return num1 + num2;
};
