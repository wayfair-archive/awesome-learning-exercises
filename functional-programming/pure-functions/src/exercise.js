import { isValidHexCode } from "./utils";

/*
 * Welcome to the Functional Programming Pure Functions Exercise!
 *
 * The goal of this exercise is to learn to write a pure function.
 *
 * As a reminder, this means that the function MUST be:
 *
 * 1. Deterministic: The function must return the same result
 *        every time it is called.
 * 2. Side-Effect Free: The function should not modify anything
 *        outside of its own scope, including function parameters
 *
 * We've provided two stub functions below, as well as a set of (failing)
 * unit tests. Your goal is simple: Make the tests pass.
 *
 * You are welcome to read the test file, but you should NOT modify the
 * unit tests. You are only required to write code in the body of the
 * functions below.
 *
 * You have been provided with a util function "isValidHexCode", which
 * you may find useful in completing the exercise.
 */

/*
 * Exercise One
 *
 * We would like you, please, to implement a function which takes in
 * a string of the form "#000000" (an Octothorpe followed by 6
 * hexadecimal digits) and returns an object with the following shape
 * {
 *   red: 0, green: 0, blue: 0
 * }
 *
 * Input: #ffffff
 *     => ff ff ff     // break it into three parts and remove the #
 *     => 255 255 255  // convert hex number to base 10
 *     => { red: 255, green: 255, blue: 255 } // drop it into an object
 *
 * (Although these strings CAN be shortened to only 3 characters "#000",
 * you are only required to handle the six digit case.)
 *
 * You can read more about hex strings here (you'll need to understand
 * how they work to complete the exercise):
 * https://www.freecodecamp.org/news/how-hex-code-colors-work-how-to-choose-colors-without-a-color-picker/
 */
export const hexToRgb = (hexCode) => {
  console.log("Write your code here!");
  return null;
};

/*
 * Exercise Two
 *
 * Now, do it again, but in reverse!
 *
 * We would like you, please, to implement a function which takes in
 * an object with the following shape
 * {
 *   red: 0, green: 0, blue: 0
 * }
 * and returns a string of the form "#000000" (an Octothorpe
 * followed by 6 hexadecimal digits)
 *
 * (Although these strings CAN be shortened to only 3 characters "#000",
 * you are only required to handle the six digit case.)
 */
export const rgbToHex = (rgbObject) => {
  console.log("Write your code here");
  return null;
};
