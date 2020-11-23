import React, { useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import "./containers.scss";
import { Block } from "../grid-components";

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

export const QuestionWrapper = ({
  title,
  children,
  solution,
  showOverlayToggle
}) => {
  const [showAsOverlay, toggleOverlay] = useState(!showOverlayToggle);

  return (
    <div className="QuestionWrapper">
      <div
        className={cx("QuestionWrapper-inner", {
          "is-overlay": showAsOverlay
        })}
      >
        <div className="QuestionWrapper-header">
          {title}
          {showOverlayToggle && (
            <button
              type="button"
              className="QuestionWrapper-button"
              onClick={() => toggleOverlay(!showAsOverlay)}
            >
              {showAsOverlay ? "Show side by side" : "Show as overlay"}
            </button>
          )}
        </div>
        <div className="QuestionWrapper-body">
          <Block>
            <Block size={showAsOverlay ? 12 : 6}>
              <div
                className={cx("QuestionWrapper-userInput", {
                  "is-sideBySide": !showAsOverlay
                })}
              >
                {children}
              </div>
            </Block>
            <Block size={showAsOverlay ? 12 : 6}>
              <div
                className={cx("QuestionWrapper-solution", {
                  "is-overlay": showAsOverlay
                })}
                size={6}
              >
                <div className="QuestionWrapper-solution-wrap">{solution}</div>
              </div>
            </Block>
          </Block>
        </div>
      </div>
    </div>
  );
};

QuestionWrapper.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  solution: PropTypes.node,
  showAsOverlay: PropTypes.bool,
  showOverlayToggle: PropTypes.boolean
};

QuestionWrapper.defaultProps = {
  title: "",
  children: null,
  solution: null,
  showAsOverlay: true,
  showOverlayToggle: false
};
