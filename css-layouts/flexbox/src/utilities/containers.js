import React, { useState } from "react";
import "./containers.scss";

export const Alert = ({ children }) => {
  const [showAlert, setShowAlert] = useState(true);

  return (
    showAlert && (
      <div className="Alert">
        <div>{children}</div>
        <button className="Alert-dismiss" onClick={() => setShowAlert(false)}>
          X
        </button>
      </div>
    )
  );
};

export const QuestionWrapper = (props) => {
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

export const ExerciseTwoWrapper = (props) => {
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
