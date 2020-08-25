`
📚 Exercise 1: The difference between Vanilla JS and TypeScript 📚

🛠️ Update the input and output types to make sure we're always
🛠️ adding two numbers together, returning a result of a number

💡 Typing this function helps demonstrate how you can limit the 
💡 output of your code to smaller subsets of all possible results.
 
💡 As you type your code, any invalid parameters should show up in
💡 your IDE, so that you're immediately aware that function parameters are invalid
`
export const addTogether = (num1, num2) => {
	return num1 + num2;
}
// addTogether(5, 10) // results in 15
// addTogether(5, '10') // results in '510'