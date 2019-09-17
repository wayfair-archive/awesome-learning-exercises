/* eslint-disable no-unused-expressions, import/first */
`
📚 Exercise 2, Part 2 - Hooks Cleanup 📚
 
  We've seen how useEffect works similarly to
  React lifecycle methods like componentDidMount,
  and componentDidUpdate. In this part, we're going
  to discuss the "cleanup" function from useEffect.

  In Part 1, we fire a network request to get trivia
  about a number. However, what happens when this
  component unmounts while the request is still
  in flight? Open the console, then try navigating 
  away from the Exercise 2 page after setting the 
  slider value to 6. React will throw an error if 
  you try to change the state of an unmounted 
  component. Let's fix it!
  
  🛠️ Change the useEffect hook to uses the "hasUnmounted"
  🛠️ variable, provided for you inside useEffect.
  🛠️ Based on the value of this variable,
  🛠️ prevent the setTrivia call from occurring
  🛠️ if the component has unmounted.

  💡 The cleanup function returned from useEffect
  💡 should change "hasUnmounted" in some way.
  💡 Inside the Promise, you then need to implement
  💡 "hasUnmounted" and prevent setTrivia if the
  💡 component was unmounted.
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
    let hasUnmounted = false;
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

` 
✅✅✅ 

  When you're done with Part 1, open 
  'exercises/exercise3/index.js' to
  begin the next exercise!
  
✅✅✅
`;

// ⛔ You should not need to modify anything below
// ⛔ this line
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
