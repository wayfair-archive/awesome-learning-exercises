import React, { useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
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

export const QuestionWrapper = ({
  title,
  children,
  solution,
  showOverlayToggle,
  hasFixedHeight
}) => {
  const [showAsOverlay, toggleOverlay] = useState(!showOverlayToggle);

  return (
    <div
      className={cx("QuestionWrapper", {
        "is-overlay": showAsOverlay,
        "has-fixedHeight": hasFixedHeight
      })}
    >
      <div className="QuestionWrapper-inner">
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
          <div className="QuestionWrapper-userInput">{children}</div>
          <div className="QuestionWrapper-solution">{solution}</div>
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
  showOverlayToggle: PropTypes.bool,
  hasFixedHeight: PropTypes.bool
};

QuestionWrapper.defaultProps = {
  title: "",
  children: null,
  solution: null,
  showAsOverlay: true,
  showOverlayToggle: false,
  hasFixedHeight: false
};
