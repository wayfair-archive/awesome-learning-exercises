import React from "react";
/* 
  CSS rules for this component and exercise should be added
  to the CSS file below
*/
import "./positioning.css";

const Positioning = () => (
  <div>
    <p>
      1. Add the necessary CSS properties to position the red dot in the center
      of the blue rectangle
    </p>
    <div className="blue-rectangle">
      <div className="red-dot" />
    </div>
    <br />
    <p>2. Affix the yellow box to the bottom right side of the window</p>
    <div className="yellow-box" />
    <br />
    <p>
      3. Make the green bar stick to the top of the box when you scroll past it
    </p>
    <div className="wrapper">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div className="green-bar" />
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?
      </p>
    </div>
    <br />
    <br />
    <br />
  </div>
);

export default Positioning;
