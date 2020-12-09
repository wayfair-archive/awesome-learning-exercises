/**
 * 🛑 This is NOT where to start with the exercise!
 *
 * ➡️ Please click on `exercise2/index.js` to begin
 */

import React from "react";
import { Block } from "../../grid-components";
import { NumberedBrick } from "../../utilities/shapes";
import { QuestionWrapper } from "../../utilities/containers";

export const QuestionOne = ({ children }) => (
  <QuestionWrapper
    title="Question 1"
    showOverlayToggle
    solution={
      <Block>
        <Block
          size={{
            small: 4,
            medium: 6
          }}
        >
          <NumberedBrick number={1} isMasked />
        </Block>
        <Block
          size={{
            small: 4,
            medium: 6
          }}
        >
          <NumberedBrick number={2} isMasked />
        </Block>
        <Block
          size={{
            small: 4,
            medium: 12
          }}
        >
          <NumberedBrick number={3} isMasked />
        </Block>
      </Block>
    }
  >
    {children}
  </QuestionWrapper>
);

export const QuestionTwo = ({ children }) => (
  <QuestionWrapper
    title="Question 2"
    showOverlayToggle
    solution={
      <Block>
        <Block
          size={{
            small: 12,
            medium: 4,
            large: 3
          }}
        >
          <NumberedBrick number={1} isMasked />
        </Block>
        <Block
          size={{
            small: 6,
            medium: 8,
            large: 3
          }}
        >
          <NumberedBrick number={2} isMasked />
        </Block>
        <Block
          size={{
            small: 6,
            medium: 8,
            large: 3
          }}
        >
          <NumberedBrick number={3} isMasked />
        </Block>
        <Block
          size={{
            small: 12,
            medium: 4,
            large: 3
          }}
        >
          <NumberedBrick number={4} isMasked />
        </Block>
      </Block>
    }
  >
    {children}
  </QuestionWrapper>
);

export const QuestionThree = ({ children }) => (
  <QuestionWrapper
    title="Question 3"
    showOverlayToggle
    solution={
      <Block>
        <Block
          size={{
            small: 5,
            medium: 4,
            large: 2
          }}
        >
          <NumberedBrick number={1} isMasked />
        </Block>
        <Block
          size={{
            small: 0,
            medium: 8
          }}
        >
          <NumberedBrick number={2} isMasked />
        </Block>
        <Block
          size={{
            small: 7,
            medium: 4,
            large: 2
          }}
        >
          <NumberedBrick number={3} isMasked />
        </Block>
        <Block
          size={{
            small: 0,
            medium: 4,
            large: 5
          }}
        >
          <NumberedBrick number={4} isMasked />
        </Block>
        <Block
          size={{
            small: 12,
            medium: 4,
            large: 5
          }}
        >
          <NumberedBrick number={5} isMasked />
        </Block>
        <Block
          size={{
            small: 0,
            medium: 12,
            large: 2
          }}
        >
          <NumberedBrick number={6} isMasked />
        </Block>
      </Block>
    }
  >
    {children}
  </QuestionWrapper>
);

export const QuestionFour = ({ children }) => (
  <QuestionWrapper
    title="Question 4"
    showOverlayToggle
    solution={
      <Block>
        <Block
          size={{
            small: 0,
            large: 2
          }}
        >
          <NumberedBrick number={1} isMasked />
        </Block>
        <Block
          size={{
            small: 4,
            medium: 7,
            large: 2
          }}
        >
          <NumberedBrick number={2} isMasked />
        </Block>
        <Block
          size={{
            small: 4,
            medium: 8,
            large: 2
          }}
        >
          <NumberedBrick number={3} isMasked />
        </Block>
        <Block
          size={{
            small: 0,
            medium: 9,
            large: 2
          }}
        >
          <NumberedBrick number={4} isMasked />
        </Block>
        <Block
          size={{
            small: 4,
            medium: 10,
            large: 2
          }}
        >
          <NumberedBrick number={5} isMasked />
        </Block>
        <Block
          size={{
            small: 12,
            medium: 11,
            large: 2
          }}
        >
          <NumberedBrick number={6} isMasked />
        </Block>
      </Block>
    }
  >
    {children}
  </QuestionWrapper>
);
