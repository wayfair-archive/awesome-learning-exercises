import React from "react";
import { Block } from "../../../grid-components";
import "./questions.scss";

export const ExerciseOneWrapper = (props) => {
  const { children, question } = props;
  return (
    <div
      className={`ExerciseOneWrapper ExerciseOneWrapper--question${question}`}
    >
      <div className="ExerciseOneWrapper-inner">
        <div className="Marker Marker--one" />
        <div className="Marker Marker--two" />
        <div className="Marker Marker--three" />
      </div>
      <div>{children}</div>
    </div>
  );
};

export const QuestionOne = ({ children }) => (
  <ExerciseOneWrapper question={1}>{children}</ExerciseOneWrapper>
);

export const QuestionTwo = ({ children }) => (
  <ExerciseOneWrapper question={2}>{children}</ExerciseOneWrapper>
);

export const QuestionThree = ({ children }) => (
  <ExerciseOneWrapper question={3}>{children}</ExerciseOneWrapper>
);

export const QuestionFour = ({ children }) => (
  <ExerciseOneWrapper question={4}>{children}</ExerciseOneWrapper>
);