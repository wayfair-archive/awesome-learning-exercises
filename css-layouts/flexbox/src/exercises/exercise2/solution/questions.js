import React from "react";
import { Block } from "../../../grid-components";
import { NumberedBrick } from "../../../utilities/shapes";
import { QuestionWrapper } from "../../../utilities/containers";

export const QuestionOne = ({ children }) => (
  <QuestionWrapper
    title="Question 1"
    showOverlayToggle
    solution={
      <Block>
        <Block
          size={{
            all: 12,
            small: 6,
            medium: 4,
            large: 4
          }}
        >
          <NumberedBrick number={1} isMasked />
        </Block>
        <Block
          size={{
            all: 12,
            small: 6,
            medium: 4,
            large: 8
          }}
        >
          <NumberedBrick number={2} isMasked />
        </Block>
        <Block
          size={{
            small: 12,
            medium: 4,
            large: 12
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
            all: 12,
            small: 12,
            medium: 4,
            large: 2
          }}
        >
          <NumberedBrick number={1} isMasked />
        </Block>
        <Block
          size={{
            all: 6,
            small: 6,
            medium: 4,
            large: 2
          }}
        >
          <NumberedBrick number={2} isMasked />
        </Block>
        <Block
          size={{
            all: 6,
            small: 6,
            medium: 4,
            large: 2
          }}
        >
          <NumberedBrick number={3} isMasked />
        </Block>
        <Block
          size={{
            all: 12,
            small: 12,
            medium: 4,
            large: 2
          }}
        >
          <NumberedBrick number={4} isMasked />
        </Block>
        <Block
          size={{
            all: 6,
            small: 6,
            medium: 4,
            large: 2
          }}
        >
          <NumberedBrick number={5} isMasked />
        </Block>
        <Block
          size={{
            all: 6,
            small: 6,
            medium: 4,
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

export const QuestionThree = ({ children }) => (
  <QuestionWrapper
    title="Question 3"
    showOverlayToggle
    solution={
      <Block>
        <Block
          size={{
            all: 6,
            small: 6,
            medium: 4,
            large: 1
          }}
        >
          <NumberedBrick number={1} isMasked />
        </Block>
        <Block
          size={{
            all: 6,
            small: 6,
            medium: 8,
            large: 8
          }}
        >
          <NumberedBrick number={2} isMasked />
        </Block>
        <Block
          size={{
            all: 6,
            small: 12,
            medium: 4,
            large: 3
          }}
        >
          <NumberedBrick number={3} isMasked />
        </Block>
        <Block
          size={{
            all: 6,
            small: 12,
            medium: 4,
            large: 6
          }}
        >
          <NumberedBrick number={4} isMasked />
        </Block>
        <Block
          size={{
            all: 6,
            small: 5,
            medium: 4,
            large: 5
          }}
        >
          <NumberedBrick number={5} isMasked />
        </Block>
        <Block
          size={{
            all: 6,
            small: 7,
            medium: 12,
            large: 1
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
            all: 12,
            small: 8,
            medium: 4,
            large: 6
          }}
        >
          <NumberedBrick number={1} isMasked />
        </Block>
        <Block
          size={{
            all: 12,
            small: 4,
            medium: 8,
            large: 6
          }}
        >
          <NumberedBrick number={2} isMasked />
        </Block>
        <Block
          size={{
            all: 6,
            small: 4,
            medium: 8,
            large: 6
          }}
        >
          <NumberedBrick number={3} isMasked />
        </Block>
        <Block
          size={{
            all: 6,
            small: 8,
            medium: 4,
            large: 6
          }}
        >
          <NumberedBrick number={4} isMasked />
        </Block>
        <Block
          size={{
            all: 6,
            small: 5,
            medium: 4,
            large: 5
          }}
        ></Block>
      </Block>
    }
  >
    {children}
  </QuestionWrapper>
);
