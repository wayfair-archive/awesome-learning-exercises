import React, { useState } from "react";
import cx from "classnames";
import { Block } from "../../../grid-components";
import { BrickOne, NumberedBrick } from "../../../utilities/shapes";
import "./questions.scss";

const QuestionTwoWrapper = (props) => {
  const { children, solution } = props;
  const [showAsOverlay, toggleOverlay] = useState(false);

  return (
    <div className="QuestionTwoWrapper">
      <div className="QuestionTwoWrapper-header">
        {/* <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label> */}
        <button onClick={() => toggleOverlay(!showAsOverlay)}>
          {showAsOverlay ? "Show side by side" : "Show as overlay"}
        </button>
      </div>
      <div className="QuestionTwoWrapper-inner">
        <Block>
          <Block size={showAsOverlay ? 12 : 6}>
            <div
              className={cx("QuestionTwoWrapper-userInput", {
                "is-sideBySide": !showAsOverlay
              })}
            >
              {children}
            </div>
          </Block>
          <Block size={showAsOverlay ? 12 : 6}>
            <div
              className={cx("QuestionTwoWrapper-solution", {
                //"is-hidden": !showAsOverlay
                "is-overlay": showAsOverlay
              })}
              size={6}
            >
              <div className="QuestionTwoWrapper-solution-wrap">{solution}</div>
            </div>
          </Block>
        </Block>
      </div>
    </div>
  );
};

export const QuestionOne = ({ children }) => (
  <QuestionTwoWrapper
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
  </QuestionTwoWrapper>
);

export const QuestionTwo = ({ children }) => (
  <QuestionTwoWrapper
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
  </QuestionTwoWrapper>
);

export const QuestionThree = ({ children }) => (
  <QuestionTwoWrapper
    solution={
      <Block>
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
  </QuestionTwoWrapper>
);
