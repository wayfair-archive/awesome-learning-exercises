/*eslint-disable no-unused-expressions */

`
⬇️

⭐️⭐️⭐️ Bonus Exercises ⭐️⭐️⭐️

In these bonus exercises, we will write gradually more complex
functions over promises, ending with a homemade implementation
of Promise.all().

🚨 If you haven't already, you should complete the other exercises
🚨 in this lesson. You might want to review what Promise.all()
🚨 does as well:
🚨 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

 ⬆️
`;

`
📚 Exercise One - makePromiseGetter() 📚

By design, the Promise API doesn't allow you to get the state of
a promise object (whether it's pending, resolved or rejected)
synchronously (e.g., with some kind of method call, like
myPromise.getState()). However, it's possible to write
a function that takes a promise and returns a getter function
that returns the current state of that promise by using then()
and catch().

See makePromiseGetter() below for an implementation of such a
function. Note that the getter function returns 0, 1, or 2
corresponding to the possible states of the promise. We have
defined PENDING, RESOLVED, and REJECTED constants
for those values.

🛠️ Read makePromiseGetter() below and complete the test cases,
🛠️ filling in the appropriate descriptions and missing values.

`;

const PENDING = 0,
  RESOLVED = 1,
  REJECTED = 2;

function makePromiseGetter(p) {
  let state = PENDING;

  p.then(() => {
    state = RESOLVED;
  }).catch(() => {
    state = REJECTED;
  });

  return () => state;
}

describe('makePromiseGetter()', () => {
  it('should...', () => {
    const pending = new Promise((resolve, reject) => {});
    const getPromiseState = makePromiseGetter(pending);
    expect(getPromiseState()).toBe('???');
  });

  it('should...', () => {
    const resolving = Promise.resolve(123);
    const getPromiseState = makePromiseGetter(resolving);

    expect(getPromiseState()).toBe('???');
    return Promise.resolve().then(() => {
      expect(getPromiseState()).toBe('???');
    });
  });

  it('should...', () => {
    const rejecting = Promise.reject(123);
    const getPromiseState = makePromiseGetter(rejecting);

    expect(getPromiseState()).toBe('???');
    return Promise.resolve().catch(() => {
      expect(getPromiseState()).toBe('???');
    });
  });
});

`
📚 Exercise Two - promiseBoth() 📚

Write a function promiseBoth() that takes two promises "left"
and "right" and returns a promise with the following behavior:

  - If both "left" and "right" resolve, resolve to an array
    [leftValue, rightValue] with the values the promises resolve to.
  - If either "left" or "right" reject, resolve to the rejected value.

Don't use Promise.all() to implement this; instead, use the Promise
constructor to get access to functions that resolve and reject
the new promise.

🛠️ Implement promiseBoth() below so that the test cases pass.

`;

function promiseBoth(left, right) {
  // todo
}

describe('promiseBoth()', () => {
  it('should return a promise that resolves to a pair when the given promises resolve', () => {
    return promiseBoth(Promise.resolve('hello'), Promise.resolve('world')).then(
      responses => {
        expect(responses).toEqual(['hello', 'world']);
      }
    );
  });

  it('should return a promise that rejects when either promise rejects', () => {
    return promiseBoth(Promise.resolve('oh'), Promise.reject('no')).catch(
      response => {
        expect(response).toBe('no');
      }
    );
  });
});

`
📚 Exercise Three - promiseAll() 📚

Finally, write a function promiseAll() that has the same behavior as
Promise.all().

You shouldn't call promiseBoth() in promiseAll(); instead, think about
how to generalize the logic of promiseBoth() so that it works for an array
of promises.

🛠️ Implement promiseAll() below so that the test cases pass.

`;

function promiseAll(promises) {
  // todo
}

describe('promiseAll()', () => {
  it('should return a promise that resolves to an array when all the given promises resolve', () => {
    const promises = [
      Promise.resolve(1),
      Promise.resolve(2),
      Promise.resolve(3),
    ];
    return promiseAll(promises).then(responses => {
      expect(responses).toEqual([1, 2, 3]);
    });
  });

  it('should return a promise that rejects when any promise rejects', () => {
    const promises = [
      Promise.reject(1),
      Promise.resolve(2),
      Promise.resolve(3),
    ];
    return promiseAll(promises).catch(response => {
      expect(response).toEqual(1);
    });
  });

  it('should return a promise that rejects when the first promise rejects', () => {
    const promises = [
      Promise.reject(1),
      Promise.resolve(2),
      Promise.resolve(3),
    ];
    return promiseAll(promises).catch(response => {
      expect(response).toEqual(1);
    });
  });
});
