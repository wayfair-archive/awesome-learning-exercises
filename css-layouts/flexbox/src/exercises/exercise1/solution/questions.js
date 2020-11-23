import React from "react";
import { Block } from "../../../grid-components";
import { Square, Star, Heart, Circle } from "../../../utilities/shapes";
import { QuestionWrapper } from "../../../utilities/containers";

export const QuestionOne = ({ children }) => (
  <QuestionWrapper
    title="Question 1"
    solution={
      <Block size={12} justifyContent="space-evenly">
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
    title="Question 2"
    solution={
      <Block
        size={12}
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
    title="Question 3"
    solution={
      <Block size={12} flexDirection="row-reverse">
        <Circle size="medium" color="red" isMasked />
      </Block>
    }
  >
    {children}
  </QuestionWrapper>
);

export const QuestionFour = ({ children }) => (
  <QuestionWrapper
    title="Question 4"
    solution={
      <Block size={12} justifyContent="space-between">
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
    title="Question 5"
    solution={
      <Block size={12} justifyContent="center" alignItems="flex-end">
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
  <QuestionWrapper
    title="Question 6"
    solution={
      <Block size={12} flexDirection="row-reverse">
        <Heart size="large" color="red" isMasked />
        <Heart size="large" color="green" isMasked />
        <Square size="large" color="blue" isMasked />
      </Block>
    }
  >
    {children}
  </QuestionWrapper>
);

export const QuestionSeven = ({ children }) => (
  <QuestionWrapper
    title="Question 7"
    solution={
      <Block size={12} justifyContent="space-around">
        <Star size="large" color="yellow" isMasked />
        <Heart size="small" color="blue" isMasked />
        <Square size="medium" color="red" isMasked />
      </Block>
    }
  >
    {children}
  </QuestionWrapper>
);
