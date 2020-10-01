import React from "react";
import { Block } from "../../../grid-components";
import {
  Square,
  Star,
  Heart,
  Circle,
  Triangle
} from "../../../utilities/shapes";

import "./questions.scss";

const QuestionWrapper = (props) => {
  const { children, solution } = props;
  return (
    <div className="QuestionWrapper">
      <div className="QuestionWrapper-inner">
        <div className="QuestionWrapper-underlay">{solution}</div>
        {children}
      </div>
    </div>
  );
};

export const QuestionOne = ({ children }) => (
  <QuestionWrapper
    solution={
      <Block size="12" justifyContent="space-evenly">
        <Square size="large" color="red" isMasked />
        <Square size="large" color="blue" isMasked />
        <Square size="large" color="green" isMasked />
      </Block>
    }
  >
    {children}
  </QuestionWrapper>
);

export const QuestionTwo = ({ children }) => (
  <QuestionWrapper
    solution={
      <Block
        size="12"
        flexDirection="row-reverse"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Star size="large" color="red" isMasked />
        <Circle size="small" color="blue" isMasked />
        <Heart size="large" color="green" isMasked />
      </Block>
    }
  >
    {children}
  </QuestionWrapper>
);

export const QuestionThree = ({ children }) => (
  <QuestionWrapper
    solution={
      <Block size="12" flexDirection="row-reverse">
        <Circle size="medium" color="red" isMasked />
      </Block>
    }
  >
    {children}
  </QuestionWrapper>
);

export const QuestionFour = ({ children }) => (
  <QuestionWrapper
    solution={
      <Block size="12" justifyContent="space-between">
        <Square size="medium" color="green" isMasked />
        <Square size="medium" color="blue" isMasked />
        <Square size="medium" color="yellow" isMasked />
      </Block>
    }
  >
    {children}
  </QuestionWrapper>
);

export const QuestionFive = ({ children }) => (
  <QuestionWrapper
    solution={
      <Block size="12" justifyContent="center" alignItems="flex-end">
        <Circle size="large" color="blue" isMasked />
        <Circle size="small" color="green" isMasked />
        <Star size="small" color="red" isMasked />
      </Block>
    }
  >
    {children}
  </QuestionWrapper>
);

export const QuestionSix = ({ children }) => (
  <QuestionWrapper solution={<Block size="12"></Block>}>
    {children}
  </QuestionWrapper>
);
