import {
  whoStoleTheCookies,
  whoseFingerprintsAreOnItNow
} from "/src/exercises/pair_one_exercise";
// import {
//   whoStoleTheCookies,
//   whoseFingerprintsAreOnItNow
// } from "/src/solutions/pair_one_solution";

describe("Pair exercise 1", () => {
  it("Make whoStoleTheCookies returns Cookie Monster", () => {
    expect(whoStoleTheCookies()).toBe("Cookie Monster");
  });
  it("Ensure whoseFingerprintsAreOnItNow still returns You!", () => {
    expect(whoseFingerprintsAreOnItNow()).toBe("You!");
  });
});
