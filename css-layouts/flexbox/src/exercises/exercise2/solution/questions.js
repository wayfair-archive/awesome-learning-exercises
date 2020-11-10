import React, { useState } from "react";
import cx from "classnames";
import { Block } from "../../../grid-components";
import { BrickOne, NumberedBrick } from "../../../utilities/shapes";
import "./questions.scss";

const ExerciseTwoWrapper = (props) => {
  const { title, children, solution } = props;
  const [showAsOverlay, toggleOverlay] = useState(false);

  return (
    <div className="ExerciseTwoWrapper">
      <div
        className={cx("ExerciseTwoWrapper-inner", {
          //"is-hidden": !showAsOverlay
          "is-overlay": showAsOverlay
        })}
      >
        <div className="ExerciseTwoWrapper-header">
          {title}
          <button
            type="button"
            className="ExerciseTwoWrapper-button"
            onClick={() => toggleOverlay(!showAsOverlay)}
          >
            {showAsOverlay ? "Show side by side" : "Show as overlay"}
          </button>
        </div>
        <div className="ExerciseTwoWrapper-body">
          <Block>
            <Block size={showAsOverlay ? 12 : 6}>
              <div
                className={cx("ExerciseTwoWrapper-userInput", {
                  "is-sideBySide": !showAsOverlay
                })}
              >
                {children}
              </div>
            </Block>
            <Block size={showAsOverlay ? 12 : 6}>
              <div
                className={cx("ExerciseTwoWrapper-solution", {
                  //"is-hidden": !showAsOverlay
                  "is-overlay": showAsOverlay
                })}
                size={6}
              >
                <div className="ExerciseTwoWrapper-solution-wrap">
                  {solution}
                </div>
              </div>
            </Block>
          </Block>
        </div>
      </div>
    </div>
  );
};

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
