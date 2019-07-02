// Pair Exercise #1

// Refactor the variable types and scopes of the following code block so that whoStoleTheCookies() returns the value of fingerprints in its original scope.

// Note: whoseFingerprintsAreOnItNow() already returns the value of fingerprints in the global scope.
//       Make sure you don't accidentally change that.

// THIS IS THE BROKEN ONE which will be uncommented in the student version
// var whoStoleTheCookies;
// var whoseFingerprintsAreOnItNow;

// {
//   var fingerprints = "Cookie Monster";
//   whoStoleTheCookies = function() { return fingerprints; }
// }

// var fingerprints = "You!"; // Cookie Monster sneakily replaces his fingerprints with yours. Don't actually do this in your day-to-day work!
// whoseFingerprintsAreOnItNow = function () { return fingerprints; }

// THIS IS THE FIXED ONE only available in the teachers version
export var whoStoleTheCookies;
export var whoseFingerprintsAreOnItNow;

{
  const fingerprints = "Cookie Monster"; // This is the only change needed. You cant also use "let" instead of "const" here.
  whoStoleTheCookies = function() {
    return fingerprints;
  };
}

var fingerprints = "You!"; // Cookie Monster sneakily replaces his fingerprints with yours. Don't actually do this in your day-to-day work!
whoseFingerprintsAreOnItNow = function() {
  return fingerprints;
};
