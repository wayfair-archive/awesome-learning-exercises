import React from "react";
import cx from "classnames";
import "./shapes.scss";

export const Triangle = ({ size, color, isMasked }) => (
  <div
    className={`Shape Shape-triangle Shape-triangle--${size} Shape-triangle--${color}`}
  >
    <svg viewBox="0 0 53 53">
      {isMasked ? (
        <path
          stroke-dasharray="4"
          fill-opacity="0"
          stroke-opacity="1"
          stroke-width="3"
          d="M22.169872981078 5.5192378864668a5 5 0 0 1 8.6602540378444 0l21.339745962156 36.961524227066a5 5 0 0 1 -4.3301270189222 7.5l-42.679491924311 0a5 5 0 0 1 -4.3301270189222 -7.5"
        ></path>
      ) : (
        <path d="M22.169872981078 5.5192378864668a5 5 0 0 1 8.6602540378444 0l21.339745962156 36.961524227066a5 5 0 0 1 -4.3301270189222 7.5l-42.679491924311 0a5 5 0 0 1 -4.3301270189222 -7.5"></path>
      )}
    </svg>
  </div>
);

export const Star = ({ size, color, isMasked }) => (
  <div
    className={cx(`Shape Shape-star Shape-star--${size} Shape-star--${color}`, {
      "is-masked": isMasked
    })}
  >
    {isMasked ? (
      <svg viewBox="0 0 28 28">
        <path d="M10.74 13.5L12 14.7a1.33 1.33 0 01.3.9l-.3 1.8 1.6-.8a.75.75 0 01.9 0l1.6.8-.3-1.8a1 1 0 01.3-.9l1.3-1.2-1.8-.3c-.3 0-.6-.3-.8-.5l-.8-1.6-.8 1.6a.78.78 0 01-.8.5zm6.7 6.7a1 1 0 01-.5-.1L14 18.5 11.14 20a1.14 1.14 0 01-1.1-.1 1 1 0 01-.4-1l.6-3.2-2.3-2.3a1 1 0 01.5-1.7l3.2-.5L13 8.3a1.39 1.39 0 011-.5 1 1 0 01.9.6l1.4 2.9 3.2.5a1 1 0 01.8.7.91.91 0 01-.3 1l-2.3 2.3.6 3.2a1 1 0 01-.4 1 .87.87 0 01-.46.2z" />
      </svg>
    ) : (
      <svg viewBox="0 0 28 28">
        <path d="M14 18.5L11.2 20c-1 .5-1.6 0-1.4-1l.5-3.2L8 13.6c-.8-.8-.5-1.5.5-1.7l3.2-.5 1.4-2.9c.5-1 1.3-1 1.8 0l1.4 2.9 3.2.5c1.1.2 1.3.9.5 1.7l-2.3 2.3.5 3.2c.2 1.1-.5 1.6-1.4 1L14 18.5z" />
      </svg>
    )}
  </div>
);

export const Square = ({ size, color, isMasked }) => (
  <div
    className={cx(
      `Shape Shape-square Shape-square--${size} Shape-square--${color}`,
      {
        "is-masked": isMasked
      }
    )}
  />
);

export const Circle = ({ size, color, isMasked }) => (
  <div
    className={cx(
      `Shape Shape-circle Shape-circle--${size} Shape-circle--${color}`,
      {
        "is-masked": isMasked
      }
    )}
  />
);

export const Heart = ({ size, color, isMasked }) => (
  <div
    className={cx(
      `Shape Shape-heart Shape-heart--${size} Shape-heart--${color}`,
      {
        "is-masked": isMasked
      }
    )}
  >
    {isMasked ? (
      <svg viewBox="0 0 28 28">
        <path d="M14 21.74a1 1 0 01-.7-.28l-6.82-6.71a4.93 4.93 0 010-7 5.08 5.08 0 017.1 0l.42.41.42-.42a5.09 5.09 0 017.1 0 4.93 4.93 0 010 7l-6.82 6.72a1 1 0 01-.7.28zM10 8.26a3.06 3.06 0 00-2.15.87 2.93 2.93 0 000 4.14l6.12 6 6.12-6a2.93 2.93 0 000-4.14 3.08 3.08 0 00-4.29 0l-1.13 1.1a1 1 0 01-1.4 0l-1.09-1.09A3 3 0 0010 8.26z" />
        <path
          fill="none"
          d="M10 8.26a3.06 3.06 0 00-2.15.87 2.93 2.93 0 000 4.14l6.12 6 6.12-6a2.93 2.93 0 000-4.14 3.08 3.08 0 00-4.29 0l-1.13 1.1a1 1 0 01-1.4 0l-1.09-1.09A3 3 0 0010 8.26z"
        />
      </svg>
    ) : (
      <svg viewBox="0 0 28 28">
        <path d="M21.335 7.553l.183.17a4.93 4.93 0 010 7l-6.82 6.72a1 1 0 01-.7.28 1 1 0 01-.7-.28l-6.82-6.71a4.93 4.93 0 010-7 5.08 5.08 0 017.1 0l.42.41.42-.42a5.09 5.09 0 016.917-.17z" />
      </svg>
    )}
  </div>
);

export const NumberedBrick = ({ number, isMasked }) => (
  <div
    className={cx("NumberedBrick", {
      "is-masked": isMasked
    })}
  >
    <span className="NumberedBrick-number">{number}</span>
  </div>
);

export const BrickOne = () => <NumberedBrick number={1} />;
export const BrickTwo = () => <NumberedBrick number={2} />;
export const BrickThree = () => <NumberedBrick number={3} />;
export const BrickFour = () => <NumberedBrick number={4} />;
export const BrickFive = () => <NumberedBrick number={5} />;
export const BrickSix = () => <NumberedBrick number={6} />;
