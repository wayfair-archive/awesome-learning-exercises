/*
  Next, we're going to apply what we've learned about base-12 grids
  to arrange some content blocks. 

  The Block prop accepts either an integer representing a single width,
  or an object representing the widths specified at certain breakpoints.

  The breakpoints provided in the compoment are "all", "small", "medium",
  and "large". These are intended to match up to mobile devices, medium-range
  devices like tablets, and then desktops. 
  
  In practice, even mobile devices have a large range of pixel sizes
  so you will see many more breakpoints values in between 
  the ones set here. 

  For example, if one were to pass in the following size object
  to the Block component:

  ```
  size={{
    all: 12,
    small: 12
    medium: 6
    large: 4
  }}
  ```

  The computed CSS would set the width for that element to be 100%
  of the container at small range, half the width at medium range, 
  and one-third of the width of the page at large range. The "all"
  value represents the width that it should fall back to if a
  width isn't specified for a smaller size.


  In the JSX below, add the appropriate width props to the Block
  components so that the layout matches the solution in the righthand
  panel. 

  Note: since this involves re-sizing the screen to confirm your results,
  it is suggested that you open the browser view in a new window.
  
*/

import React from "react";
import { Block } from "../../grid-components";
import { QuestionOne, QuestionTwo, QuestionThree, QuestionFour } from "./solution/questions";
import {
  BrickOne,
  BrickTwo,
  BrickThree,
  BrickFour,
  BrickFive,
  BrickSix
} from "../../utilities/shapes";

const ExerciseTwo = () => {
  return (
    <div>
      <QuestionOne>
        <Block>
          <Block>
            <BrickOne />
          </Block>
          <Block>
            <BrickTwo />
          </Block>
          <Block>
            <BrickThree />
          </Block>
        </Block>
      </QuestionOne>
      <QuestionTwo>
        <Block>
          <Block>
            <BrickOne />
          </Block>
          <Block>
            <BrickTwo />
          </Block>
          <Block>
            <BrickThree />
          </Block>
          <Block>
            <BrickFour />
          </Block>
        </Block>
      </QuestionTwo>

      <QuestionThree>
        <Block>
          <Block>
            <BrickOne />
          </Block>
          <Block>
            <BrickTwo />
          </Block>
          <Block>
            <BrickThree />
          </Block>
          <Block>
            <BrickFour />
          </Block>
          <Block>
            <BrickFive />
          </Block>
          <Block>
            <BrickSix />
          </Block>
        </Block>
      </QuestionThree>

      <QuestionFour>
        <Block>
          <Block>
            <BrickOne />
          </Block>
          <Block>
            <BrickTwo />
          </Block>
          <Block>
            <BrickThree />
          </Block>
          <Block>
            <BrickFour />
          </Block>
        </Block>
      </QuestionFour>
    </div>
  );
};

export default ExerciseTwo;
