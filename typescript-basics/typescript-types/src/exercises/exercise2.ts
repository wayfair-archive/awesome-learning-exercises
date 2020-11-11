/*
📚 Exercise 2: Levaraging Enums, Interfaces and Types 📚
When we are looking to type something, we want 
to constrain the possible values a variable can
be. If we want to make sure that a variable is one
of three different types, we can leverage a Union
Type to represent this. By typing this to be one of
three types, we have reduced the amount of possible
values that could represent that value from infinite
to 3, which is great in helping us debug in the future!

In this course, we will be generally using Interfaces
to declare types. This will be advantageous because
Interfaces can be extended. Functions typing can
leverage Types because that syntax is cleaner.
For more information, feel free to check out
https://blog.logrocket.com/types-vs-interfaces-in-typescript/

🚨 Part 1 🚨
🛠️ Correctly type the Sandwich type by leveraging
🛠️ Union Types (and the existing types that have
🛠️ been declared)

💡 If you need some advice, look into Union Types
https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#union-types
 
💡 After correctly typing Sandwich, we will be
💡 able to make sure we only have Sandwich objects
💡 in our array.
💡 The unit tests will not pass until you have 
💡 completed Part 2.

🚨 Part 2 🚨
🛠️ Add your own BLT sandwich object to the 
🛠️ sandwiches array, with its own corresponding 
🛠️ interface. Add "SandwichBread" to BunVariation
🛠️ and Add "Bacon" to SandwichMeat before creating 
🛠️ the BLT interface. Resolve any failing tests 
🛠 if items are not of Sandwich objects.

💡 This will show you how to add your own interfaces, 
💡 and continue to extend your current
💡 data structures to handle future iterations.

🚨 Be wary of any existing input that might not fit
🚨 the expected Sandwich type and remove that from
🚨 the array if TS is giving you an error.
*/

export enum BunVariation {
  SideLoading = "SideLoading",
  HoagieBun = "HoagieBun"
}

export enum SandwichMeat {
  Frankfurter = "Frankfurter",
  Beefsteak = "Beefsteak"
}

interface HotDog {
  bun: BunVariation.SideLoading;
  filling: SandwichMeat.Frankfurter;
}

interface Cheesesteak {
  bun: BunVariation.HoagieBun;
  filling: SandwichMeat.Beefsteak;
}

// Type this with a Union Type!
type Sandwich = any;

export const sandwiches: Sandwich[] = [
  {
    bun: BunVariation.SideLoading,
    filling: SandwichMeat.Frankfurter
  },
  {
    bun: BunVariation.HoagieBun,
    filling: SandwichMeat.Beefsteak
  },
  {
    bun: "Sesame",
    filling: "Pork"
  },
  {
    bun: "Ciabatta",
    filling: "Turkey"
  }
];

/**
🚨 Part 3 🚨
📚 Enums without Strings 📚

🛠️ We've updated the enums to have no string 
🛠️ value associated with it. Now, each of 
🛠️ the enum values represents a number.
🛠️ The goal of this exercise is to show that
🛠️ TypeScript enums do not need string values.
🛠️ If the usage of the enum is consistent in your
🛠️ codebase, there doesn't need to be any 
🛠️ references to strings

💡 Please fix the use of the function 
💡 hotDog() to filter by the bun and sandwich meat
💡 enum values (from Part3), rather than the 
💡 string name. This will resolve the issue
💡 with the failing test
 */

export enum BunVariationPart3 {
  SideLoading,
  HoagieBun
}

export enum SandwichMeatPart3 {
  Frankfurter,
  Beefsteak
}

interface HotDogPart3 {
  bun: BunVariationPart3.SideLoading;
  filling: SandwichMeatPart3.Frankfurter;
}

interface CheesesteakPart3 {
  bun: BunVariationPart3.HoagieBun;
  filling: SandwichMeatPart3.Beefsteak;
}

type SandwichPart3 = HotDogPart3 | CheesesteakPart3;

const sandwichArray: SandwichPart3[] = [
  {
    bun: BunVariationPart3.SideLoading,
    filling: SandwichMeatPart3.Frankfurter
  },
  {
    bun: BunVariationPart3.HoagieBun,
    filling: SandwichMeatPart3.Beefsteak
  }
];

interface FindBySandwichType {
  sandwichBunType: BunVariationPart3;
  sandwichFillingType: SandwichMeatPart3;
}
const findBySandwichType = ({
  sandwichBunType,
  sandwichFillingType
}: FindBySandwichType): SandwichPart3[] => {
  return sandwichArray.filter(
    (sandwich) =>
      sandwich.bun === sandwichBunType &&
      sandwich.filling === sandwichFillingType
  );
};

export const hotDogs = () => {
  // get hot dogs
  return findBySandwichType({
    sandwichBunType: "SideLoading",
    sandwichFillingType: "Frankfurter"
  });
};
