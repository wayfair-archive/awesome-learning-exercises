/* eslint-disable no-unused-expressions, import/first */
`
📚 Exercise 2, Part 2 - Hooks and the DOM 📚
 
  We've seen how useEffect works similarly to
  React lifecycle methods like componentDidMount,
  and componentDidUpdate. In this part, we're going
  to discuss the "cleanup" function from useEffect.

  In Part 1, we fire a network request to get trivia
  about a number. However, what happens when this
  component unmounts while the request is still
  in flight? Try navigating away from the Exercise 2
  page immediately after you've updated the slider.
  React will throw an error if you try to change the
  state of an unmounted component. Let's fix it!
  
  🛠️ Change the useEffect hook to return a function
  🛠️ that "cleans up" the Promise if it has not yet
  🛠️ resolved if the component was unmounted.

  💡 Before we execute getNumberTrivia, we want to 
  💡 track whether or not the Promise resolved.
  💡 You can use a variable to hold this value,
  💡 then evaluate the value of that variable
  💡 after the Promise resolves.
`;

import React, {
  useEffect,
  useState
} from 'react';
import { getNumberTrivia } from './utilities';
import NumberSlider from './NumberSlider';

const Exercise2Part2 = (props) => {
  const defaultTriviaMessage =
    "Couldn't find any trivia!";
  const { number } = props;
  const [trivia, setTrivia] = useState(
    defaultTriviaMessage
  );
  useEffect(() => {
    getNumberTrivia(number).then((response) => {
      setTrivia(response.trivia);
    });
  }, [number]);
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
      <Exercise2Part2 number={sliderValue} />
      <NumberSlider
        handleChange={handleSliderChange}
        value={sliderValue}
      />
    </section>
  );
};

export default Form;
