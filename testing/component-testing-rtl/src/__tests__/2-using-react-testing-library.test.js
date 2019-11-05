import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '../../test/setup';

`
⬇️

You now know it can be tough to test nontrivial React components based
on the elements they return.

Your goal throughout these exercises is to leverage the power of React
Testing Library to re-write our old tests into a series of smaller, more
readable, and more robust new tests.

Along the way, you will learn more about the React Testing Library API.
We suggest you keep the React Testing Library docs open throughout this.

⬆️
`;

`📚 Exercise one - Testing the Icon component with React Testing Library 📚

In our first attempt, we tested that Icon renders an <img> and
that the <img> is given the correct props.

Let's recreate that test using React Testing Library.

🛠️ Write a test that checks two things:
🛠️ 1) Icon props contain a properly formatted src based
🛠️    on the iconType and the correct altText.
🛠️ 2) Icon type is <img>

🚨 In order to do this, you will need head over to the React Testing Library docs
🚨 and familiarize yourself with "getByAltText"
🚨 (https://testing-library.com/docs/dom-testing-library/api-queries#byalttext)
`;

const Icon = ({ iconType, altText }) => (
  <img
    src={`https://cdn.wayfair.com/static/icons/${iconType}.svg`}
    alt={altText}
  />
);

test('Icon has the right props and type', () => {
  const { getByAltText } = render(<Icon iconType="trash" altText="Delete" />);
  // Your code here ...
});

`📚 Exercise two - Testing the IconButton component with React Testing Library 📚

In our last attempt, we tested IconButton by using ReactDOM to render
into a <div>, making assertions on the innerHTML property of the <div>.
We can do more with React Testing Library and its "render" api

🛠️ Write a test that checks three things:
🛠️ 1) The IconButton should render an img element
🛠️ 2) The img element is receiving the altText and iconType props
🛠️ 3) Renders the text you pass it as a child (<IconButton>Click</IconButton> should
🛠️ have text of Click.)

🚨 In order to do this, head over to the React Testing Library docs
🚨 and familiarize yourself with a few new things: "getByText" and "toBeInTheDocument"
🚨 (https://testing-library.com/docs/guide-disappearance)
🚨 (https://testing-library.com/docs/dom-testing-library/api-queries#bytext)
`;

const IconButton = ({ iconType, altText, children }) => (
  <button>
    <Icon iconType={iconType} altText={altText} />
    {children}
  </button>
);

test('IconButton renders an Icon and button text', () => {
  // Your code here ...
});

`📚 Exercise 3 - Testing multiple states 📚

Your team is introducing a new component - Dialog.
Dialog takes children and an "isOpen" prop, and renders
children only when isOpen is true.

🛠️ Write a test that checks the following
🛠️ 1) When isOpen is true, Dialog renders IconButton.
🛠️ 2) When isOpen is false, Dialog doesn't render IconButton

🚨 Head over to the React Testing Library docs
🚨 (https://testing-library.com/docs/react-testing-library/api)
🚨 and familiarize yourself with the "rerender" method, and the
🚨 difference between "queryBy*" and "getBy"
🚨 (https://testing-library.com/docs/dom-testing-library/api-queries)
`;

const Dialog = ({ isOpen, children }) => {
  return isOpen ? <div>{children}</div> : null;
};

test('Dialog renders button text when open and nothing when not open', () => {
  // Your code here...
});

`📚 Exercise 4 - Testing more complex UI 📚

Take a look at the SalesDialog below. Since we have
already tested the open and close functionality of the
Dialog, the IconButton, and the Icon individually,
we only need to test what's unique about this particular component

🛠️ Write a test for 3 things
🛠️ 1) SalesDialog renders the copy within the P tag.
🛠️ 2) Contains two Icon Buttons
🛠️ 3) Each button renders the text passed to it

You will need some new tricks for this -
if you just assert on the text of the entire Dialog component,
as it will be a jumbled mess.

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
        <IconButton
          iconType="check"
          altText="Check Mark"
          data-testid="ComplexDialogSuccessButton"
        >
          Buy Now
        </IconButton>
        <IconButton
          iconType="x"
          altText="Dismiss X"
          data-testid="ComplexDialogDismissButton"
        >
          Dismiss
        </IconButton>
      </div>
    </Dialog>
  );
};

test('SalesDialog renders sales text and button text', () => {
  const { getByTestId, getByText, getByAltText } = render(
    <SalesDialog isOpen />
  );
  // Your code here ...
});

`
✅✅✅

OUTTRO - Not an exercise

By now you should feel comfortable sorting through the React Testing Library docs
and testing the output of components.

As you get more comfortable, we suggest looking into replace the above text-matching
tests with Jest tools like "toMatchInlineSnapshot() and toMatchSnapshot()".
Make sure to check out the Jest docs as well as the React Testing Library docs
to see all the methods you can apply to your tests.

✅✅✅
`;
