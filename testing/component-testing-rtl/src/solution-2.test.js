import React from 'react';
import PropTypes from 'prop-types';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '../test/setup';

const Icon = ({ iconType, altText }) => (
  <img
    src={`https://cdn.wayfair.com/static/icons/${iconType}.svg`}
    alt={altText}
  />
);

const IconButton = ({ iconType, altText, children, onClick, isDisabled }) => (
  <button onClick={onClick} disabled={isDisabled}>
    <Icon iconType={iconType} altText={altText} /> {children}
  </button>
);

// Exercise 1
test.skip("IconButton's onClick() is called when the button is clicked", () => {
  const mockOnClick = jest.fn();

  const { queryByText } = render(
    <IconButton iconType="check" onClick={mockOnClick}>Click Me</IconButton>
  );
  expect(mockOnClick).toHaveBeenCalledTimes(0);
  fireEvent.click(queryByText(/click me/i));
  expect(mockOnClick).toHaveBeenCalledTimes(1);
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

// Exercise 2a
test.skip('NameDialog displays text input and onSave() is called when the button is clicked', () => {
  const mockOnSave = jest.fn();

  const { queryByText, queryByPlaceholderText, queryByDisplayValue } = render(
    <NameDialog onSave={mockOnSave} />
  );

  expect(queryByDisplayValue('Taylor')).not.toBeInTheDocument();
  fireEvent.change(queryByPlaceholderText(/enter your name/i), {
    target: { value: 'Taylor' },
  });
  expect(queryByDisplayValue('Taylor')).toBeInTheDocument();

  expect(mockOnSave).toHaveBeenCalledTimes(0);
  fireEvent.submit(queryByText(/save/i));
  expect(mockOnSave).toHaveBeenCalledTimes(1);
  expect(mockOnSave).toHaveBeenCalledWith('Taylor');
});

// Exercise 2b
test.skip("NameDialog's button is disabled until a user inputs text", () => {
  const { queryByText, queryByPlaceholderText } = render(
    <NameDialog onSave={() => {}} />
  );

  const button = queryByText(/save/i);
  const input = queryByPlaceholderText(/enter your name/i);

  expect(button.disabled).toBe(true);
  fireEvent.change(input, { target: { value: 'Kris' } });
  expect(button.disabled).toBe(false);
});
