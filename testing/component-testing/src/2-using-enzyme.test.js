import React from "react";
import { shallow, mount } from "enzyme";
import setup from "../test/setup";

/**
 * You now know it can be tough to test nontrivial React components based
 * on the elements they return.
 *
 * Your goal throughout these exercises is to leverage the power of Enzyme
 * to re-write our old tests into a series of smaller, more readable, and
 * more robust new tests.
 *
 * Along the way, you will learn more about the Enzyme API.
 * We suggest you keep the Enzyme docs open throughout this.
 */

/**
 * Exercise one - Testing the Icon component with Enzyme
 *
 * In our first attempt, we tested that Icon renders an <img> and that the <img>
 * is given the correct props.
 *
 * Let's recreate that test using Enzyme's shallow wrapper.
 *
 * Write a test that checks two things:
 * 1) Icon props contain a properly formatted src based on the iconType and the correct altText.
 * 2) Icon type is <img>
 *
 * In order to do this, you will need head over to the enzyme docs
 * (https://airbnb.io/enzyme/docs/api/)
 * and familiarize yourself with "shallow", "props", and "type"
 */

const Icon = ({ iconType, altText }) => (
  <img
    src={`https://cdn.wayfair.com/static/icons/${iconType}.svg`}
    alt={altText}
  />
);

test("Icon has the right props and type", () => {
  const wrapper = shallow(<Icon iconType="trash" altText="Delete" />);
  // Your code here ...
});

/**
 * Exercise two - Testing the IconButton component with Enzyme
 *
 * In our last attempt, we tested IconButton by using ReactDOM to render
 * into a <div>, making assertions on the innerHTML property of the <div>.
 * We can do more with Enzyme and its "mount" api
 *
 * Write a test that checks three things:
 * 1) The IconButton should render an Icon component
 * 2) The Icon component is receiving the altText and iconType props
 * 3) Renders the text you pass it as a child (<IconButton>Click</IconButton>) should
 * have text of Click.
 *
 * In order to do this, head over to the enzyme docs
 * (https://airbnb.io/enzyme/docs/api/) and familiarize yourself
 * with a few new things:
 * "mount", "find", and "exists"
 *
 * (Give this a shot with shallow and see why mount may be the
 * best solution here)
 */

const IconButton = ({ iconType, altText, children }) => (
  <button>
    <Icon iconType={iconType} altText={altText} />
    {children}
  </button>
);

test("IconButton renders an Icon and button text", () => {
  // Your code here ...
});

/**
 * Exercise 3 - Testing multiple states
 *
 * Your team is introducing a new component - the Dialog.
 * Dialog takes children and an "isOpen" prop, and renders
 * children only when isOpen is true.
 *
 * Write a test that checks the following
 * 1) When isOpen is true, Dialog renders IconButton.
 * 2) When isOpen is false, Dialog doesn't render IconButton
 *
 * In order to do this, head over to the enzyme docs
 * (https://airbnb.io/enzyme/docs/api/) and familiarize yourself
 * with the setProps() method.
 */

const Dialog = ({ isOpen, children }) => {
  return isOpen ? <div>{children}</div> : null;
};

test("Dialog renders button text when open and null when not open", () => {
  const wrapper = mount(
    <Dialog isOpen={false}>
      <IconButton iconType="trash" altText="Delete">
        Click Me
      </IconButton>
    </Dialog>
  );
  // Your code here ...
});

/**
 * Exercise 4 - Testing more complex UI
 *
 * Take a look at the SalesDialog below. Since we have already tested the
 * open and close functionality of the Dialog, the IconButton, and the Icon
 * individually, we only need to test what's unique about this particular component
 *
 * Write a test for 3 things
 * 1) SalesDialog renders the copy within the P tag.
 * 2) Contains two Icon Buttons
 * 3) Each button renders the text passed to it
 *
 * You will need some new tricks for this - you can just assert on the text of the
 * entire Dialog component, as it will be a jumbled mess.
 *
 * You will need to "find()" each individual element in the SalesDialog to
 * validate them on their own. Feel free to add "data-enzyme-id" properies to the
 * component, or find elements in some other way. Here are the docs for reference.
 * (https://airbnb.io/enzyme/docs/api/selector.html)
 *
 * Please check the answer key when you have finished.
 */

const SalesDialog = ({ isOpen }) => {
  return (
    <Dialog isOpen={isOpen}>
      <div className="Dialog-contentWrapper">
        <p className="Dialog-salesText" data-enzyme-id="ComplexDialogText">
          If you buy now, get 25% off on our finest widgets!
        </p>
        <IconButton
          iconType="check"
          altText="Check Mark"
          data-enzyme-id="ComplexDialogSuccessButton"
        >
          Buy Now
        </IconButton>
        <IconButton
          iconType="x"
          altText="Dismiss X"
          data-enzyme-id="ComplexDialogDismissButton"
        >
          Dismiss
        </IconButton>
      </div>
    </Dialog>
  );
};

test("SalesDialog renders sales text and a button with the right href", () => {
  const wrapper = mount(<SalesDialog isOpen />);
  // Your code here ...
});

/**
 * OUTTRO - Not an exercise
 *
 * By now you should feel comfortable sorting through the enzyme docs and testing
 * the output of components.
 *
 * As you get more comfortable, we suggest looking into replace the above text-matching
 * tests with Jest tools like "toMatchInlineSnapshot() and toMatchSnapshot()".
 * Make sure to check out the Jest docs as well as the enzyme docs to see
 * all the methods you can apply to your tests.
 */
