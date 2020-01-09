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
  expect(button).toHaveTextContent('Click Me');
  // The React Testing Library examples use .toHaveTextContent,
  // this is also valid:
  expect(button.textContent).toBe('Click Me');
});

// Exercise 3
const Dialog = ({ isOpen, children }) => {
  return isOpen ? <div>{children}</div> : null;
};

const TestComponent = ({ isOpen }) => {
  return (
    <Dialog isOpen={isOpen}>
      <IconButton iconType="trash" altText="Delete">
        Click Me
      </IconButton>
    </Dialog>
  );
};

test.skip('Dialog renders children when open', () => {
  const { queryByText } = render(<Dialog isOpen>Hello</Dialog>);
  expect(queryByText(/hello/i)).toBeInTheDocument();
});

test.skip('Dialog does NOT render children when not open', () => {
  const { queryByText } = render(<Dialog isOpen={false}>Hello</Dialog>);
  expect(queryByText(/hello/i)).not.toBeInTheDocument();
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

test.skip('SalesDialog renders sales text and button text when isOpen is true', () => {
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

test.skip('SalesDialog renders nothing when isOpen is false', () => {
  const { container } = render(
    <SalesDialog isOpen={false} />
  );
  expect(container.textContent).toBe('');
});
