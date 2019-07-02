// Group Exercise 1 - What type is Array? (typeof [])
// Assign the correct string value to the variable below to answer the question.
const arrayTypeAnswer = "object";

// Hwo to tell if a value is an array?
function isArray(value) {
  return Array.isArray(value);
}

const arrayTestValues = [[], [, , ,], { length: 0 }, new Array()];

export { arrayTypeAnswer, isArray };
