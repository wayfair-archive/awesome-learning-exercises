// SOLUTION
type Fruit = "banana" | "apple" | "none";
// means this should never happen
// - if it does, an error will throw
function exhaustiveCheck(): never {
  throw new Error("should not reach here");
}

// 🚨 Update this function 🚨
export const makeDrink = (fruit: Fruit): string => {
  switch (fruit) {
    case "none":
      return "None - Choose a fruit base!";
    case "banana":
      return "Banana Smoothie";
    case "apple":
      return "Apple Juice";
    default:
      return exhaustiveCheck();
  }
};
