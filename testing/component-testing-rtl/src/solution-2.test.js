import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '../test/setup';

// Exercise 1
const Icon = ({ iconType, altText }) => (
  <img
    src={`https://cdn.wayfair.com/static/icons/${iconType}.svg`}
    alt={altText}
  />
);

test.skip('Icon has the right props and type', () => {
  const { queryByAltText } = render(<Icon iconType="trash" altText="Delete" />);
  const image = queryByAltText(/delete/i);
  expect(image.src).toMatch('trash.svg');
});

// Exercise 2
const IconButton = ({ iconType, altText, children }) => (
  <button>
    <Icon iconType={iconType} altText={altText} />
    {children}
  </button>
);

test.skip('IconButton renders an Icon and button text', () => {
  const { queryByAltText, queryByText } = render(
    <IconButton iconType="trash" altText="Delete">
      Click Me
    </IconButton>
  );
  const image = queryByAltText(/delete/i);
  const button = queryByRole('button');
  expect(image.src).toMatch('trash.svg');
  expect(button.textContent).toBe('Click Me');
});

// Exercise 3
const Dialog = ({ isOpen, children }) => {
  return isOpen ? <div>{children}</div> : null;
};

// This is one way to test the Dialog component without repeating this code
// code in the test. Note that you have to be careful when you create helpers
// in tests to avoid repetition, because you can introduce bugs into your
// test code. Make sure you can trust your tests!
const TestComponent = ({ isOpen }) => {
  return (
    <Dialog isOpen={isOpen}>
      <IconButton iconType="trash" altText="Delete">
        Click Me
      </IconButton>
    </Dialog>
  );
};

test.skip('Dialog renders button text when open and null when not open', () => {
  const { queryByText, queryByAltText, rerender } = render(
    <TestComponent isOpen />
  );
  const icon = queryByAltText(/delete/i);
  const button = queryByText(/click me/i);
  expect(icon).toBeInTheDocument();
  expect(button).toBeInTheDocument();
  rerender(<TestComponent isOpen={false} />);
  expect(icon).not.toBeInTheDocument();
  expect(button).not.toBeInTheDocument();
});

// Exercise 4
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
        >
          Buy Now
        </IconButton>
        <IconButton
          iconType="x"
          altText="Dismiss X"
        >
          Dismiss
        </IconButton>
      </div>
    </Dialog>
  );
};

test.skip('SalesDialog renders sales text and button text', () => {
  const { queryByTestId, queryByText, queryByAltText } = render(
    <SalesDialog isOpen />
  );
  expect(queryByTestId('ComplexDialogText').textContent).toBe(
    'If you buy now, get 25% off on our finest widgets!'
  );
  expect(queryByText('Buy Now')).toBeInTheDocument();
  expect(queryByText('Dismiss')).toBeInTheDocument();
  expect(queryByAltText('Check Mark')).toBeInTheDocument();
  expect(queryByAltText('Dismiss X')).toBeInTheDocument();
});
