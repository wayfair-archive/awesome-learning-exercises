`
⬇️

Welcome to Assigning Values

This session is designed to introduce you to how assigning values to variables
works in JavaScript. In JavaScript the type of a value determines whether the
variable is assigned by value or assigned by refererence.
This exercise will discuss and demonstrate the implications of this difference.

⬆️
`;

`📚 Exercise 1 - Assign by Value 📚

In this exercise, we discuss the data types in JavaScript assigned by value.
Numbers, Strings, Booleans, undefined, null, and Symbols are the different
types of variables that are assigned by value. As a result, the variable's
value can only be changed by reassigning the variable itself. We cannot
change the underlying value of the variable without explicitly reassigning
it to a new value.

🛠️ Correct the test such that the expected asserted value is correct.

💡 You should NOT modify the function for this exercise.
💡 This exercise may seem super simple and obvious, but it serves as a
   comparison to later exercises
`;

const assignedByValue = () => {
	var assignedValueIsNotModified = 10;
	var assignedValueIsModified = assignedValueIsNotModified;

	assignedValueIsModified++;
	assignedValueIsModified = assignedValueIsModified + 20;

	return assignedValueIsNotModified;
};

describe("Exercise 1", () => {
	it("Demonstrates assign by value", () => {
		expect(assignedByValue()).toEqual(10);
	});
});

`
📚 Exercise 2 - Assign By Reference - Arrays 📚

In this exercise, we look at one of the two data types that are assigned by
reference in JavaScript.

🛠️ Similar to the exercise above, correct the test's expected value to match
	 that which is output by the function.

💡 You should NOT modify the function for this exercise.
💡 This course has the array methods prerequisite, but here is the
   documentation in case you want a refresher
💡 Array.prototype.splice docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
💡 Array.prototype.push docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
`;
const arraysAreAssignedByReference = () => {
	var assignedValueIsNotExplictlyModified = ["Are", "Red", "Violets", "Are"];
	var assignedValueIsModified = assignedValueIsNotExplictlyModified;

	// Mutation functions change the array value of doNotModifyMe without
	// explicitly using the doNotModifyMe variable.
	assignedValueIsModified.splice(0, 0, "Roses");
	assignedValueIsModified.push("Blue");

	return assignedValueIsNotExplictlyModified;
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

💡 Unlike the above exercises, modify the function for this exercise
💡 Unlike the above exercises, do NOT change the test.

🚨 Mutating objects like this can be confusing to debug and understand.
🚨 Engineers should generally endeavor to avoid introducing side effects into
	 their code and keep their functions "pure".
`;

export const objectsAreAssignedByReference = () => {
	var doNotExplicitlyModifyMe = { foo: "originalValue" };
	var pleaseDoModifyMe = doNotExplicitlyModifyMe;
	// Change the object value of doNotModifyMe without using the doNotModifyMe
	// variable.

	pleaseDoModifyMe.foo = "newValue";

	// Add code above this comment, do not modify the return
	return doNotExplicitlyModifyMe;
};

describe("Exercise 3", () => {
	it("Demonstrates assign by reference of objects", () => {
		expect(objectsAreAssignedByReference().foo).toEqual("newValue");
	});
});
