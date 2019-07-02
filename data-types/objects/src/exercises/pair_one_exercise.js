import { empty } from "/src/solutions/group_two_solution";
import { clone } from "/src/solutions/group_three_solution";

// Pair exercise 1 - Use empty & clone together

// Now let's implement a new method called reset which will take an input data object and reset all the values within, arrays OR objects.

// We will be using this data object as the input to our reset function.
// Without using the keys directly apply empty to all of the properties.
const petData = {
  cats: ["whiskers", "mittens", "phoebe"],
  dogs: ["spot", "sebastian", "hank"],
  owners: {
    Bob: { cats: 1, dogs: 1 },
    Dan: { cats: 0, dogs: 1 },
    Sally: { cats: 1, dogs: 2 }
  }
};

// Use the empty and clone functions you did in group exercises 2 and 3, respectively.
function reset(input) {
  // YOUR SOLUTION HERE
}

export { reset };
