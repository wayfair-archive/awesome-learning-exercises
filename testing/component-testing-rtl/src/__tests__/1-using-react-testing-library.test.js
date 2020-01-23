/* eslint-disable no-unused-expressions */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '../../test/setup';

// RTL should clean up automatically, but for some reason does not.
beforeEach(cleanup);

`
⬇️

Your goal throughout these exercises is to leverage the power of React
Testing Library to write tests for React components.

Along the way, you will learn more about the React Testing Library API.
We suggest you keep the React Testing Library docs open throughout this.
https://testing-library.com/docs/react-testing-library/api

⬆️
`;

`📚 Exercise one - Testing an Icon component with React Testing Library 📚

Let's start with a simple test for an Icon. The most basic component test
checks that a component's output is correct when given certain inputs (props).
In this case, we'll check that it renders an image with the right svg.

🛠️ Write a test that checks two things:
🛠️ 1) Icon contains an img with the correct altText
🛠️ 2) img props contain a src based on the iconType.

🚨 In order to do this, you will need head over to the React Testing Library docs
🚨 and familiarize yourself with "queryByAltText"
🚨 (https://testing-library.com/docs/dom-testing-library/api-queries#byalttext)
`;

const Icon = ({ iconType, altText }) => (
  <img src={`https://cdn.wayfair.com/static/icons/${iconType}.svg`} alt={altText} />
);

test('Icon has the right props and type', () => {
  const { queryByAltText } = render(<Icon iconType="trash" altText="Delete" />);
  // Your code here, remove the following expect before starting.
  expect(1).toBe(2);
});

`📚 Exercise two - Testing the IconButton component with React Testing Library 📚

Now we want to add our Icon component to a button, and we want to make sure we aren't
breaking any behavior.

🛠️ Write a test that checks three things:
🛠️ 1) The IconButton should render an img element with the right altText
🛠️ 2) The img element is receiving the correct svg based on the iconType prop
🛠️ 3) Renders the text you pass it as a child (<IconButton>Click</IconButton> should
🛠️ have text of Click.)

🚨 In order to do this, head over to the React Testing Library docs and familiarize
🚨 yourself with a few things: "queryByRole" and finding an element's text content
🚨 (https://testing-library.com/docs/react-testing-library/example-intro)
🚨 (https://testing-library.com/docs/dom-testing-library/api-queries#byrole)
`;

const IconButton = ({ iconType, altText, children }) => (
  <button>
    <Icon iconType={iconType} altText={altText} />
    {children}
  </button>
);

test('IconButton renders an Icon and button text', () => {
  // Your code here, remove the following expect before starting.
  expect(1).toBe(2);
});

`📚 Exercise 3 - Testing multiple states 📚

Branching logic is an important part of component testing. When we want to
build a component that has internal logic, We can check that a component
gives the right output when given certain inputs.

Your team is introducing a new component - Dialog.
Dialog takes children and an "isOpen" prop, and renders
children only when isOpen is true.

🛠️ Write two tests that check the following
🛠️ 1) When isOpen is true, Dialog renders its children.
🛠️ 2) When isOpen is false, Dialog doesn't render its children.

🚨 Head over to the React Testing Library docs
🚨 (https://testing-library.com/docs/react-testing-library/api)
🚨 and familiarize yourself with "rerender" and the other queryBy methods
🚨 (https://testing-library.com/docs/dom-testing-library/api-queries)
`;

const Dialog = ({ isOpen, children }) => {
  return isOpen ? <div>{children}</div> : null;
};

test('Dialog renders children when open', () => {
  // Your code here, remove the following expect before starting.
  expect(1).toBe(2);
});

test('Dialog does NOT render children when not open', () => {
  // Your code here, remove the following expect before starting.
  expect(1).toBe(2);
});

`📚 Exercise 4 - Testing more complex UI 📚

Take a look at the SalesDialog below. Since we have
already tested the open and close functionality of the
Dialog, the IconButton, and the Icon individually,
we only need to test what's unique about this particular component

🛠️ Write tests for the following:
🛠️ 1) SalesDialog renders the copy within the <p> tag.
🛠️ 2) Contains two IconButtons with the text passed into them
🛠️ 3) isOpen is passed to the Dialog

You will need some new tricks for this -
if you just assert on the text of the entire Dialog component,
it will be a jumbled mess.

💡 You will need to find each individual element
💡 in the SalesDialog to validate them on their own.
💡 Feel free to add "data-testid" properies to the
💡 component, or find elements in some other way.
💡 Here are the docs for reference.
💡 (https://testing-library.com/docs/dom-testing-library/api-queries)

🚨 Please check the answer key when you have finished.
`;

const SalesDialog = ({ isOpen }) => {
  return (
    <Dialog isOpen={isOpen}>
      <div className="Dialog-contentWrapper">
        <p className="Dialog-salesText" data-testid="ComplexDialogText">
          If you buy now, get 25% off on our finest widgets!
        </p>
        <IconButton iconType="check" altText="Check Mark">
          Buy Now
        </IconButton>
        <IconButton iconType="x" altText="Dismiss X">
          Dismiss
        </IconButton>
      </div>
    </Dialog>
  );
};

test('SalesDialog renders sales text and button text when isOpen is true', () => {
  // Your code here, remove the following expect before starting.
  expect(1).toBe(2);
});

test('SalesDialog renders nothing when isOpen is false', () => {
  // Your code here, remove the following expect before starting.
  expect(1).toBe(2);
});

`
✅✅✅

OUTRO - Not an exercise

By now you should feel comfortable sorting through the React Testing Library docs
and testing the output of components.

Make sure to check out the Jest docs as well as the React Testing Library docs
to see all the methods you can apply to your tests.

✅✅✅
`;
