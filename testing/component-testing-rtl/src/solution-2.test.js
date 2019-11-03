import React from 'react';
import { render } from '@testing-library/react';
import '../test/setup';

// Exercise 1
const Icon = ({ iconType, altText }) => (
  <img
    src={`https://cdn.wayfair.com/static/icons/${iconType}.svg`}
    alt={altText}
  />
);

test.skip('Icon has the right props and type', () => {
  const { getByAltText } = render(<Icon iconType="trash" altText="Delete" />);
  const image = getByAltText(/delete/i);
  console.log(image);
  expect(image.tagName).toBe('IMG');
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
  const { getByAltText, getByText } = render(
    <IconButton iconType="trash" altText="Delete">
      Click Me
    </IconButton>
  );
  const image = getByAltText('Delete');
  const button = getByText('Click Me');
  expect(image.src).toMatch('trash.svg');
  expect(button).toBeInTheDocument();
  expect(button.tagName).toBe('BUTTON');
});

// Exercise 3
const Dialog = ({ isOpen, children }) => {
  return isOpen ? <div>{children}</div> : null;
};

test.skip('Dialog renders button text when open and null when not open', () => {
  const wrapper = mount(
    <Dialog isOpen={false}>
      <IconButton iconType="trash" altText="Delete">
        Click Me
      </IconButton>
    </Dialog>
  );
  // YOUR CODE HERE...
  expect(wrapper.find(IconButton).exists()).toBe(false);
  wrapper.setProps({ isOpen: true });
  expect(wrapper.find(IconButton).exists()).toBe(true);
});

// Exercise 4
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

test.skip('SalesDialog renders sales text and a button with the right href', () => {
  const wrapper = mount(<SalesDialog isOpen />);
  expect(wrapper.find(`[data-enzyme-id="ComplexDialogText"]`).text()).toBe(
    'If you buy now, get 25% off on our finest widgets!'
  );
  expect(wrapper.find(IconButton).length).toBe(2);
  expect(
    wrapper.find('[data-enzyme-id="ComplexDialogSuccessButton"]').text()
  ).toBe('Buy Now');
  expect(
    wrapper.find('[data-enzyme-id="ComplexDialogDismissButton"]').text()
  ).toBe('Dismiss');
});
