/*
  ⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️

  💡 Next, we're going to apply what we've learned about base-12 grids
  💡 to arrange some content blocks. 

  💡 The Block prop accepts either an integer representing a single width,
  💡 or an object representing the widths specified at certain breakpoints.

  💡 The breakpoints provided in the compoment are "small", "medium",
  💡 and "large". These are intended to match up to mobile devices, 
  💡 medium-range devices like tablets, and then desktops. 
  
  ℹ️ In practice, devices can have a large range of pixel sizes and 
  ℹ️ layout changes might be needed at a larger variety of pixel widths. 

  ⚠️ For example, if one were to pass in the following size object
  ⚠️ to the Block component:

  ```
  size={{
    small: 12
    medium: 6
    large: 4
  }}
  ```

  💡 The computed CSS would set the width for that element to be 100%
  💡 of the container at small range, half the width at medium range, 
  💡 and one-third of the width of the page at large range. The "small"
  💡 value represents the width that it should fall back to if a
  💡 width isn't specified for a smaller size. It works the same as passing in
  💡 only a single string value.

  💡 Setting a Block component's width to the value of '0' will hide
  💡 the element at that breakpoint. When developing a real-world application,
  💡 you most likely would not want to hide a component using CSS for
  💡 performance and accessibility reasons. For the sake of this exercise, 
  💡 however, this prop is used to demonstrate the concept of certain content 
  💡 being visible or hidden for certain screen sizes or devices.

  💡 In the JSX below, add the appropriate width props to the Block
  💡 components so that the layout matches the solution in the righthand
  💡 panel. 

  💡 The background color of the brick components will change at each breakpoint
  💡 to help clarify what size you're currently viewing. 
  💡 In addition, there's an indicator on the right of the exercise navigation bar.

  💡 Note: since this involves re-sizing the screen to confirm your results,
  💡 it is suggested that you open the browser view in a new window by clicking
  💡 the button located on the far right of the browser toolbar
  
  ⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️
*/

import React from "react";
import { Block } from "../../grid-components";
import {
  QuestionOne,
  QuestionTwo,
  QuestionThree,
  QuestionFour
} from "./questions";
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
    <>
      {/*
        Question 1
      */}
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

      {/*
        Question 2
      */}
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

      {/*
        Question 3
      */}
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

      {/*
        Question 4
      */}
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
          <Block>
            <BrickFive />
          </Block>
          <Block>
            <BrickSix />
          </Block>
        </Block>
      </QuestionFour>
    </>
  );
};

export default ExerciseTwo;
