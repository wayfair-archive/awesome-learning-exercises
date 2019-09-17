/* eslint-disable no-unused-expressions, import/first */
import React, {
  useEffect,
  useState
} from 'react';
import { getNumberTrivia } from './utilities';
import NumberSlider from './NumberSlider';

const NumberTrivia = (props) => {
  const defaultTriviaMessage =
    "Couldn't find any trivia!";
  const { number } = props;
  const [trivia, setTrivia] = useState(
    defaultTriviaMessage
  );
  // 📗 Solution below 📗
  // We only care about the value of didUnmount
  // if it was set to true from the cleanup function.
  // If the promise resolves and we unmounted
  // the component, don't set the state of a
  // component that's not mounted anymore!
  useEffect(() => {
    let didUnmount = false;
    getNumberTrivia(number).then((response) => {
      if (!didUnmount) {
        setTrivia(response.trivia);
      }
    });
    return function() {
      didUnmount = true;
    };
  }, [number]);
  // 📗 Solution above 📗
  return (
    <h1>
      {trivia !== null
        ? trivia
        : defaultTriviaMessage}
    </h1>
  );
};

const Form = () => {
  const [sliderValue, setSliderValue] = useState(
    1
  );
  const handleSliderChange = (value) => {
    setSliderValue(value);
  };
  return (
    <section>
      <h3>
        Exercise 2, Part 1: Add Data Fetching to a
        component
      </h3>
      <NumberTrivia number={sliderValue} />
      <NumberSlider
        handleChange={handleSliderChange}
        value={sliderValue}
      />
    </section>
  );
};

export default Form;
