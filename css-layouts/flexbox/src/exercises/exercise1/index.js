/*
  ⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️
  
  💡 Welcome to the exercise protion of this course on Flexbox and responsive layouts

  💡 What you'll see below are a set of question components that contain
  💡 a Block component and some colored shape components. The Block component is the 
  💡 main layout component you'll be using in this course.

  💡  Instead of writing CSS, you'll specify props to the Block components which
  💡  add special CSS classes for the property. For example, if you want
  💡  to change the flex-direction of the content, you would set the `flexDirection`
  💡  prop to "row-reverse" (all props are camelcased, but the values are the normal 
  💡  CSS equivalent.

  💡  Take a look at the `grid-components.js` file to get a better idea of what
  💡  props are available, and what values they accept. If you notice, there 
  💡 are also width props to specify the size, we will get to those in exercise 2.

  If you look at the browser panel on the right, you'll see a series of solid shapes
  of different sizes and some dotted outlines of those shapes overlaid.

  Those dotted outlines represent the final location location of where we want
  the components to line up. The goal of this first exercise is to use the flex
  props on the Block component to line up those solid shapes with the dotted ones.

  💡 Note: For this first exercise, you should not need to modify the JSX at all
  💡  to find the solution.

  Note: It may be easier to do with exercise if you open the window in a separate tab

  ⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️
*/

import React from "react";
import { Block } from "../../grid-components";
import {
  QuestionOne,
  QuestionTwo,
  QuestionThree,
  QuestionFour,
  QuestionFive,
  QuestionSix
} from "./solution/questions";
import { Alert } from "../../utilities/containers";
import { Heart, Square, Star, Circle } from "../../utilities/shapes";

const ExerciseOne = () => {
  return (
    <div>
      <Alert>
        👀 &nbsp;Check out <code>/exercises/exercise1/index.js</code> to start!
      </Alert>
      <QuestionOne>
        {/*
           Add the props required to the Block component below
        */}
        <Block>
          <Square color="red" size="large" />
          <Square color="blue" size="large" />
          <Square color="green" size="large" />
        </Block>
      </QuestionOne>

      {/*
        Question 2
      */}
      <QuestionTwo>
        <Block>
          <Heart size="large" color="green" />
          <Circle size="small" color="blue" />
          <Star size="large" color="red" />
        </Block>
      </QuestionTwo>

      {/*
        Question 3
      */}
      <QuestionThree>
        <Block>
          <Circle color="red" size="medium" />
        </Block>
      </QuestionThree>

      {/* 
        Question 4
      */}
      <QuestionFour>
        <Block>
          <Square color="green" size="medium" />
          <Square color="blue" size="medium" />
          <Square color="yellow" size="medium" />
        </Block>
      </QuestionFour>

      {/* 
        Question 5 
      */}
      <QuestionFive>
        <Block>
          <Circle size="large" color="blue" />
          <Circle size="small" color="green" />
          <Star size="small" color="red" />
        </Block>
      </QuestionFive>

      {/* 
        Question 6
      */}
      <QuestionSix>
        <Block></Block>
      </QuestionSix>
    </div>
  );
};

export default ExerciseOne;
