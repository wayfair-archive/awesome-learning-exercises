// Let's get introduced to how context works

// NOTE: To do this exercise have the MDN docs for .bind .call and .apply handy!

// Group Exercise intro and setup

// The robot constructor function. Each robot will be called with a name arguments which belongs to the Robot instance
function Robot(name) {
  // Use the name function argument to attach the name property to the context/this object of each Robot
  this.name = name; // this will be deleted in the example

  // Each robot has it's own quote method which should return the quote from the list below
  this.quote = function() {
    return "";
  };
}

// Here we have all of our robots
export const voltron = new Robot("Voltron");
export const bender = new Robot("Bender");
export const optimus = new Robot("Optimus Prime");

// ...and their quotes
export const quotes = {
  voltron: "Defenders of the Universe.",
  bender:
    "Blackmail's such an ugly word. I prefer extortion. The X makes it sound cool.",
  optimus: "There's a thin line between being a hero and being a memory."
};

// Group Exercise:
//
//   Given the robots objects above, attach the speak() function to each object such that
//
// . * speak function MUST BE USED
//   * when robot.quote() is called, each one utters the correct quote
//   * robot.quote() does not require any arguments

// Use this helper method to help each Robot quote itself
// Notice the use of the "this" object inside the method.
// "this" is the DYNAMIC portion of the function, other than the arguments. (We will constrast this with scope in the next session)
function speak(message) {
  // This is where JavaScript can get _weird_. We have a method defined outside any class or context but it can use "this" all the same!
  // This is surprising and strange to see coming from traditional OOP languages!
  return this.name + " says: " + message;
}

// Use the .bind method to attach the correct quote to voltron by using speak function
voltron.quote = () => {};

// Use the .call method to attach the correct quote to bender by using speak function
bender.quote = () => {};

// Use the .apply method to attach the correct quote to optimus by using speak function
optimus.quote = () => {};
