import {
  Notifier,
  ENABLE_BONUS_EXERCISE
} from "/src/exercises/pair_one_exercise";
// import {
//   Notifier,
//   ENABLE_BONUS_EXERCISE
// } from "/src/solutions/pair_one_solution";

describe("Pair exercise", () => {
  it("Notifier, notifies callbacks of triggered events", done => {
    // We are using the new keyword to create a new context for the Notifier
    // This isn't part of the session, but feel free to look up the "new" keyword on MDN
    const note = new Notifier();

    note.on("tada!", function() {
      try {
        expect(this.data).toEqual({ foo: "baz" });
        done();
      } catch (err) {
        done(err);
      }
    });
    note.trigger("tada!", { foo: "baz" });
  });

  if (ENABLE_BONUS_EXERCISE) {
    it("BONUS - Rewrite the notifier without the use of context(including event callbacks)", done => {
      const note = new Notifier();
      note.on("tada!", data => {
        try {
          expect(data).toEqual({ foo: "bar" });
          done();
        } catch (err) {
          done(err);
        }
      });
      note.trigger("tada!", { foo: "baz" });
    });
  }
});
