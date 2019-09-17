/* eslint-disable no-unused-expressions, import/first */
import React, {
  Component,
  useState
} from 'react';
import { getNumberTrivia } from './../../utilities';
import NumberSlider from './../../NumberSlider';

class NumberTrivia extends Component {
  state = {
    trivia: "Couldn't find any trivia!"
  };

  isUnMounted = false;

  componentDidUpdate(prevProps) {
    if (prevProps.number !== this.props.number) {
      getNumberTrivia(this.props.number).then(
        (response) => {
          if (!isUnMounted) {
            this.setState({
              trivia: response.trivia
            });
          }
        }
      );
    }
  }

  // Classes vs hooks
  // Need to use componentWillUnmount and
  // store to a value on the class to track
  // whether or not this component has
  // unmounted
  componentWillUnmount() {
    this.isUnMounted = true;
  }

  render() {
    return <h1>{this.state.trivia}</h1>;
  }
}

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
