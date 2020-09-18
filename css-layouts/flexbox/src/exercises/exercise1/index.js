import React from "react";
import { Block, RedBlock, BlueBlock, GreenBlock } from "../../grid-components";
import { QuestionOne, QuestionTwo, QuestionThree } from "./solution/questions";
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
          <Square color="green" size="large" isMasked />
        </Block>
      </QuestionOne>

      {/*
        Question 2
      */}
      <QuestionTwo>
        <Heart size="large" color="green" isMasked />
        <Circle size="small" color="blue" />
        <Star size="large" color="red" isMasked />
      </QuestionTwo>

      {/*
        Question 3
      */}
      <QuestionThree>
        <Block>
          <RedBlock />
          <BlueBlock />
          <GreenBlock />
        </Block>
      </QuestionThree>
    </div>
  );
};

export default ExerciseOne;
