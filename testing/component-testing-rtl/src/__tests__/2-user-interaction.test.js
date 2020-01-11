/* eslint-disable no-unused-expressions */
import React from 'react';
import PropTypes from 'prop-types';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '../../test/setup';

`
⬇️

You should now be comfortable with the major parts of the React Testing Library
API. Let's exercise that knowledge with more complex components to test.

💡 Note: The Icon and IconButton components below are setup for the
💡 rest of this session.

⬆️
`;

const Icon = ({ iconType, altText }) => (
  <img
    src={`https://cdn.wayfair.com/static/icons/${iconType}.svg`}
    alt={altText}
  />
);

`
💡 Note that this version of IconButton takes an
💡 "onClick" prop (a function that will be called
💡 when the button is pressed) and an "isDisabled" prop.
`;

const IconButton = ({ iconType, altText, children, onClick, isDisabled }) => (
  <button onClick={onClick} disabled={isDisabled}>
    <Icon iconType={iconType} altText={altText} />{children}
  </button>
);

`📚 Exercise 1 - Testing user interaction 📚

🛠️ Write a test that the "onClick" prop of IconButton
🛠️ is called when the button is pressed.

🚨 You should use a jest.fn() mock and React Testing Library's render()
🚨 and fireEvent.click() methods (imported above) -
🚨 (https://testing-library.com/docs/dom-testing-library/api-events)
🚨 The FAQ shows how you can use jest.fn() to mock a function -
🚨 (https://testing-library.com/docs/react-testing-library/faq)
`;

test("IconButton's onClick() is called when the button is clicked", () => {
  // Your code here, remove the following expect before starting.
  expect(1).toBe(2);
});

` 🚨Exercise Setup 🚨

In the following exercises , you'll write tests
for the NameDialog component. This component renders
a text input and with a submit button (implemented
using IconButton) that allows users to submit their name.

Checkout the implementation, and when you're ready tackle
the exercises below.
`;

class NameDialog extends React.Component {
  state = { name: '' };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleSaveClick = () => {
    this.props.onSave(this.state.name);
  };

  render() {
    return (
      <form onSubmit={this.handleSaveClick}>
        <p>What is your name?</p>
        <input
          type="text"
          placeholder="Enter your name"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <IconButton
          iconType="submit"
          isDisabled={!this.state.name}
        >Save</IconButton>
      </form>
    );
  }
}

NameDialog.propTypes = {
  onSave: PropTypes.func.isRequired,
};

`
📚 Exercise 2a - User Interaction Part 1  📚

Test user interaction by doing the following:

🛠️ 1) Simulate a change to the text input and verify that
🛠️    the component displays the new value
🛠️ 2) Simulate a click on the submit button and verify
🛠️    that onSave() is called
`;

test("NameDialog displays text input and it's onSave() is called when the button is clicked", () => {
  // Your code here, remove the following expect before starting.
  expect(1).toBe(2);
});

`📚 Exercise 2b - User Interaction Part 2  📚

🛠️ Test that the disabling functionality works:
🛠️ the button should be disabled as long as the
🛠️ text input has no text. Once a user enters some text,
🛠️ the button should be enabled.
`;

test("NameDialog's button is disabled until a user inputs text", () => {
  // Your code here, remove the following expect before starting.
  expect(1).toBe(2);
});
