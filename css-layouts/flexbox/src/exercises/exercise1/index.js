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
import { Triangle, Heart, Square, Star, Circle } from "../../utilities/shapes";

const ExerciseOne = () => {
  return (
    <div>
      <QuestionOne>
        {/*
           Add the props to the Block component below
          
          Note: Try not to move the JSX around as a method of solving the exerise
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
