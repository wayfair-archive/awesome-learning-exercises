`
⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️

Welcome to Async Js- Intro to promises!

 This will build your knowledge of async JS -
 particularly promises. You will use to two mock APIs
 to mimic working with something like a fetch or AJAX call.

 If you are curious about those fake APIs, feel free to
 check them out in the ../api folder.

 ⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️
`;

`
📚 Exercise 1 - Let's write a promise 📚

🛠️ Inside the exerciseOne block, return a new promise.
🛠️ This promise should resolve with the string
🛠️ 'promise complete!' after a delay of 100ms.

`;

const exerciseOne = () => {
  // Your code here
};

test('the promise resolves with a string of "promise complete!"', () => {
  return expect(exerciseOne()).resolves.toBe("promise complete!");
});

`
📚 Exercise 2 - Rejected! 📚 

🛠️ Return a new promise from the exerciseTwo block.
🛠️ This promise should reject with the string
🛠️ 'promise rejected!' after a delay of 100ms.
`;

const exerciseTwo = () => {
  // Your code here
};

test('the promise rejects with a string of "promise rejected!"', () => {
  expect.assertions(1);
  return expect(exerciseTwo()).rejects.toMatch("promise rejected!");
});

`
📚 Exercise 3 - Converting to a promise 📚 
 
  We have an old callback-powered aysync function in our codebase
  called fetchUser. This function takes in a user id and a callback,
  and hits an endpoint with the id.
  fetchUser then calls it's provided callback with the response.
 
  🛠️  Fill in the getUserById function below.
  🛠️  It should return a new promise that calls the fetchUser function.
  🛠️  The promise should resolve with the user response
 
  NOTE: Look at the test below to see an example of what
  the endpoint returns

`;
const getUserById = id => {
  // Your code here
};

test("getUserId is a promise that returns users when called with ids", () => {
  return getUserById("14356").then(res => {
    expect(res).toEqual({
      userId: "14356",
      basketId: "19456",
      isPreferredCustomer: false,
      name: "Hal Smith"
    });
  });
});
`
📚 Exercise 4 - Getting values from a promise 📚 
 
  Good news! Your team was able to write newFetchUser which has
  the same functionality but is completely promised-based.
 
  Now your team needs to implement a new feature, populate a user's
  shopping basket with their selected items when they leave and
  come back.
 
  In order to do that, you first need a way to fetch their basketId
  if they have one.
 
  🛠️ Write a function called getBasketId which takes in a user ID,
  🛠️ calls newFetchUser with the user id, and resolves with their
  🛠️ basketId if they have one, and an empty string if not.
`;

const getBasketId = userId => {
  // Your code here
};

test("getBasketId returns a basket ID when one exists", () => {
  return expect(getBasketId("14356")).resolves.toBe("19456");
});
test("getBasketId returns empty string when no basket id exists", () => {
  return expect(getBasketId("14357")).resolves.toEqual("");
});

`
📚 Exercise 5 - Implement getBasketItems 📚
 
  Now that we can fetch a basketId given a userId,
  we need a way to fetch baskets.
 
  Luckily we have a promise-based function called fetchBasket
  which takes in a basketId, hits an endpoint, and returns a basket
  object if one matches the basketId provided.
 
  🛠️ Fill in the getBasketItems function below
  🛠️ It should take in a basketId string, 
  🛠️ call the fetchBasket endpoint with basketId.
  🛠️ If items exists on the response object, resolve with the items array.
  🛠️ If items doesn't exist on the response object, resolve with an empty array
 
  💡 fetchBasket returns an object in this shape:
  {
    customerId: string,
    name: string,
    items: array
  }
 `;

const getBasketItems = basketId => {
  // Your code here
};

test("getBasketItems returns an array of basket Items when one exists", () => {
  return expect(getBasketItems("19456")).resolves.toEqual([
    "SETO12945, HRTI4567"
  ]);
});
test("getBasketItems returns empty array when the id does not match a basket", () => {
  return expect(getBasketItems("")).resolves.toEqual([]);
});
test("getBasketItems catches an error in getBasketId when invalid basketId is passed", () => {
  return expect(getBasketItems("this is invalid")).rejects.toBe(
    "Invalid basket ID passed"
  );
});

`
📚 Exercise 6 - Putting it all together 📚
 
  🛠️ Fill in the getUserBasket function below. 
  🛠️ This function should take a user id and resolve with
  🛠️ an array of their basket items if they have any, an
  🛠 empty array if they dont, and catch errors specific to each call.
 
  🚨 You will need more than one catch to handle errors
  from both getBasketId and getBasketItems

  🚨 This will require you to call both the getUserBasket and
  getBasketItems functions you have written.
 
  💡 Your catches should return an object of the shape:
  {
     error: <error message returned from the ajax operation>
  }
 `;

const getUserBasket = userId => {
  // Your code here
};

test("getUserBasket returns basket items when they exist", () => {
  return expect(getUserBasket("14356")).resolves.toEqual([
    "SETO12945, HRTI4567"
  ]);
});
test("getUserBasket returns empty array when a user has no basket ID", () => {
  return expect(getUserBasket("14357")).resolves.toEqual([]);
});
test("getUserBasket throws an error when an invalid user id is passed", () => {
  return expect(getUserBasket("invalid id")).resolves.toEqual({
    error: "Invalid user ID passed"
  });
});
test("getUserBasket throws an error when an invalid basket id is passed", () => {
  // This should throw an error on the basket call because the user returns
  // a null basket id which isn't a valid parameter for the basket endpoint.
  return expect(getUserBasket("14358")).resolves.toEqual({
    error: "Invalid basket ID passed"
  });
});
