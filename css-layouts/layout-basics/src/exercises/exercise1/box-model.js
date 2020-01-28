import React from "react";
/* 
  💡 CSS rules for this component and exercise should be added
  💡 to the CSS file below
*/
import "./box-model.css";

const BoxModel = () => (
  <div>
    <p>
      1. Add the proper CSS rules to make the green child element fill the
      entire height and width of the orange parent container (the white area
      only)
    </p>
    <br />
    <div className="boxModelQ1-container">
      <span className="boxModelQ1-child">Child</span>
    </div>
    <br />
    <p>
      2. Make the child image element fit inside of the dark blue parent
      container without overflowing.
    </p>
    <br />
    <div className="boxModelQ2-container">
      <div className="boxModelQ2-child">
        <img
          src="http://placekitten.com/500/250"
          className="boxModelQ2-image"
          alt="😸"
        />
      </div>
    </div>
    <br />
    <p>
      3. Align all three blocks onto one line with equal widths, spanning the
      full available space of the parent.
    </p>
    <br />
    <div className="boxModelQ3-container">
      <div className="boxModelQ3-block1">1</div>
      <div className="boxModelQ3-block2">2</div>
      <div className="boxModelQ3-block3">3</div>
    </div>
    <br />
    <p>
      4. Bonus: Re-do question 3, this time add 20px of spacing in between each
      of the items.
    </p>
    <br />
    <br />
  </div>
);

export default BoxModel;
