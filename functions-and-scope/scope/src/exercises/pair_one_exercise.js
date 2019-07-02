// Pair Exercise #1

// Refactor the variable types and scopes of the following code block so that whoStoleTheCookies() returns the value of fingerprints in its original scope.

// Note: whoseFingerprintsAreOnItNow() already returns the value of fingerprints in the global scope.
//       Make sure you don't accidentally change that.

export var whoStoleTheCookies;
export var whoseFingerprintsAreOnItNow;

{
  var fingerprints = "Cookie Monster";
  whoStoleTheCookies = function() {
    return fingerprints;
  };
}

var fingerprints = "You!"; // Cookie Monster sneakily replaces his fingerprints with yours. Don't actually do this in your day-to-day work!
whoseFingerprintsAreOnItNow = function() {
  return fingerprints;
};
