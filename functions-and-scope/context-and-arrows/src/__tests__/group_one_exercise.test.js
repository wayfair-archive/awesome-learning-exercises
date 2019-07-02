import {
  voltron,
  bender,
  optimus,
  quotes
} from "/src/exercises/group_one_exercise";
// import {
//   voltron,
//   bender,
//   optimus,
//   quotes
// } from "/src/solutions/group_one_solution";

describe("(group exercise) Robot", () => {
  it("can quote Voltron", () => {
    expect(voltron.quote()).toEqual("Voltron says: " + quotes.voltron);
  });

  it("can quote Bender", () => {
    expect(bender.quote()).toEqual("Bender says: " + quotes.bender);
  });

  it("can quote Optimus Prime", () => {
    expect(optimus.quote()).toEqual("Optimus Prime says: " + quotes.optimus);
  });
});
