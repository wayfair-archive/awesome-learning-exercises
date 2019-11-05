import React from 'react';
import PropTypes from 'prop-types';
import { render, fireEvent } from '@testing-library/react';
import setup from '../test/setup';

const Icon = ({ iconType, altText }) => (
  <img
    src={`https://cdn.wayfair.com/static/icons/${iconType}.svg`}
    alt={altText}
  />
);

const IconButton = ({ iconType, altText, buttonText, onClick, isDisabled }) => (
  <button onClick={onClick} disabled={isDisabled}>
    <Icon iconType={iconType} altText={altText} /> {buttonText}
  </button>
);

// Exercise 1
test.skip("IconButton's onClick() is called when the button is clicked", () => {
  const mock = jest.fn();

  const { getByText } = render(
    <IconButton buttonText="Submit" iconType="submit" onClick={mock} />
  );
  // Your code here
  expect(mock).toHaveBeenCalledTimes(0);
  fireEvent.click(getByText('Submit'));
  expect(mock).toHaveBeenCalledTimes(1);
});

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
      <div>
        <p>What is your name?</p>
        <input
          type="text"
          placeholder="Enter your name"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <IconButton
          buttonText="Save"
          iconType="submit"
          onClick={this.handleSaveClick}
          isDisabled={!this.state.name}
        />
      </div>
    );
  }
}

NameDialog.propTypes = {
  onSave: PropTypes.func.isRequired,
};

// Exercise 2a
test.skip('NameDialog displays text input and onSave() is called when the button is clicked', () => {
  const mock = jest.fn();

  const { getByText, getByPlaceholderText, queryByDisplayValue } = render(
    <NameDialog onSave={mock} />
  );

  expect(queryByDisplayValue('Taylor')).not.toBeInTheDocument();
  fireEvent.change(getByPlaceholderText('Enter your name'), {
    target: { value: 'Taylor' },
  });
  expect(queryByDisplayValue('Taylor')).toBeInTheDocument();

  expect(mock).toHaveBeenCalledTimes(0);
  fireEvent.click(getByText('Save'));
  expect(mock).toHaveBeenCalledTimes(1);
  expect(mock).toHaveBeenCalledWith('Taylor');
});

// Exercise 2b
test.skip("NameDialog's button is disabled until a user inputs text", () => {
  const { getByText, getByPlaceholderText } = render(
    <NameDialog onSave={() => {}} />
  );

  const button = getByText('Save');
  const input = getByPlaceholderText('Enter your name');

  expect(button.disabled).toBe(true);
  fireEvent.change(input, { target: { value: 'Kris' } });
  expect(button.disabled).toBe(false);
});
