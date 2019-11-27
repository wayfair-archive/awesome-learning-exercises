/*eslint-disable no-unused-expressions */
`
⬇️

Welcome to Assigning Values

This session is designed to introduce you to how assigning values to variables
works in javascript. In javascript the typeof a value determines whether the
variable is assigned by value or assigned by refererence.
This exercise will discuss and demonstrate the implications of this difference.

⬆️
`;

`📚 Exercise 1 - Assign by Value 📚

In this exercise, we discuss the data types in javascript assigned by value.
Numbers, Strings, Booleans, undefined, null, and Symbols are the different
types of variables that are assigned by value. As a result, the variable's
value can only be changed by reassigning the variable itself
(The assigned value cannot be mutated).

🛠️ Correct the test such that the expected asserted value is correct.

💡 You should NOT modify the function for this exercise.
💡 This exercise may seem super simple and obvious, but it serves as a
   comparison to later exercises
`;

const assignedByValue = () => {
	var doNotModifyMyAssignedValue = 10;
	var pleaseDoModifyMyAssignedValue = doNotModifyMyAssignedValue;

	pleaseDoModifyMyAssignedValue++;
	pleaseDoModifyMyAssignedValue = doNotModifyMyAssignedValue + 20;

	return doNotModifyMyAssignedValue;
};

describe("Exercise 1", () => {
	it("Demonstrates assign by value", () => {
		expect(assignedByValue()).toEqual(10);
	});
});

`
📚 Exercise 2 - Assign By Reference - Arrays 📚

In this exercise, we look at one of the two data types that are assigned by
reference in javascript.

🛠️ Similar to the exercise above, correct the test's expected value to match
	 that which is output by the function.

💡 You should NOT modify the function for this exercise.
💡 This course has the array methods prerequisite, but here is the
   documentation in case you want a refresher
💡 Array.prototype.splice docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
💡 Array.prototype.push docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
`;
const arraysAreAssignedByReference = () => {
	var doNotModifyMe = ["Are", "Red", "Violets", "Are"];
	var pleaseDoModifyMe = doNotModifyMe;

	// Mutation functions change the array value of doNotModifyMe without
	// explicitly using the doNotModifyMe variable.
	pleaseDoModifyMe.splice(0, 0, "Roses");
	pleaseDoModifyMe.push("Blue");

	// Return doNotModifyMe.
	return doNotModifyMe;
};

describe("Exercise 2", () => {
	it("Demonstrates assign by reference of arrays", () => {
		expect(arraysAreAssignedByReference()).toEqual([
			"Roses",
			"Are",
			"Red",
			"Violets",
			"Are",
			"Blue"
		]);
	});
});

`📚 Exercise 3 - Assign By Reference - Objects 📚

In this exercise, we will mutate an object value as a "side effect" of
mutating a variable assigned to the same value.
Remember, Objects are assigned by reference similar to Arrays (in Exercise 2),
but different from Numbers, Strings, Booleans, undefined, null, and Symbols
which are assigned by value.

🛠️ Change the objectsAreAssignedByReference function to return the expected
	 value in the test
🛠️ Do NOT explicitly use the doNotModifyMe variable to do so.

💡 Unlike the above exercises, do NOT change the test, modify the function.

🚨 Mutating objects like this can be confusing to debug and understand.
🚨 Engineers should generally endeavor to avoid introducing side effects into
	 their code and keep their functions "pure".
`;

export const objectsAreAssignedByReference = () => {
	var doNotModifyMe = { foo: "originalValue" };
	var pleaseDoModifyMe = doNotModifyMe;
	// Change the object value of doNotModifyMe without using the doNotModifyMe
	// variable.

	pleaseDoModifyMe.foo = "newValue";

	// Add code above this comment, do not modify the return
	return doNotModifyMe;
};

describe("Exercise 3", () => {
	it("Demonstrates assign by reference of objects", () => {
		expect(objectsAreAssignedByReference().foo).toEqual("newValue");
	});
});
