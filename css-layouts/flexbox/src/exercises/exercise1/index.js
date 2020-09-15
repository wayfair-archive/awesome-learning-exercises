import React from "react";
import { Block, RedBlock, BlueBlock, GreenBlock } from "../../grid-components";
import { QuestionOne, QuestionTwo, QuestionThree } from "./solution/questions";

const ExerciseOne = () => {
  return (
    <div>
      <QuestionOne>
        {/*
           Add the props to the Block component below
          
          Note: Try not to move the JSX around as a method of solving the exerise
        */}
        <Block>
          <RedBlock />
          <BlueBlock />
          <GreenBlock />
        </Block>
      </QuestionOne>

      {/*
        Question 2
      */}
      <QuestionTwo></QuestionTwo>

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
