import React from "react";
import { Block } from "../../../grid-components";
import { NumberedBrick } from "../../../utilities/shapes";
import { ExerciseTwoWrapper } from "../../../utilities/containers";

export const QuestionOne = ({ children }) => (
  <ExerciseTwoWrapper
    title="Question 1"
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
  </ExerciseTwoWrapper>
);

export const QuestionTwo = ({ children }) => (
  <ExerciseTwoWrapper
    title="Question 2"
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
  </ExerciseTwoWrapper>
);

export const QuestionThree = ({ children }) => (
  <ExerciseTwoWrapper
    title="Question 3"
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
  </ExerciseTwoWrapper>
);

export const QuestionFour = ({ children }) => (
  <ExerciseTwoWrapper
    title="Question 4"
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
  </ExerciseTwoWrapper>
);
