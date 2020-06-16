/* eslint-disable no-unused-expressions, import/first, no-use-before-define, no-unreachable */

`
📚 Exercise 2: ARIA Roles in Semantic Elements 📚

🚨 For this exercise, you must use your system
🚨 screen reader. Please follow the below tutorials
🚨 to set up your computer's screen reader.
🚨   ChromeOS: https://www.youtube.com/watch?v=fpbIsN31hLM&
🚨   macOS:    https://www.youtube.com/watch?v=5R-6WvAihms
🚨   Windows:  https://www.youtube.com/watch?v=EiQ8NwdsZCY
🚨 Each screen reader is a little different based on the OS.
🚨 Make sure you're watching the right video
🚨 based on your OS.

Welcome to Exercise 2: ARIA Roles in Semantic Elements! 

ARIA (Accessible Rich Internet Applications) Roles
provide contextual information about HTML elements
on a page that may be clear to a reader visually,
but may not be well defined when being understood
by accessible technology.

Many HTML elements have ARIA roles built into them.
This includes elements like h2, p, ul, nav, and more.

You may have noticed that you can't see anything
in the Exercise 2 page! You can only use a screen reader
to browse this page and see its content. Without ARIA
roles, you don't have any meaningful understanding of
content on the page, and it makes it difficult for you,
and people who use screen reading technology, to
interact with or understand a page.

To see just how meaningful ARIA roles are, use your
screen reader on the Exercise 2 page. Compare what
the screen reader can understand with what you as a
visual reader can see on Exercise 1. There should
be a huge discrepancy between what you can intuit
visually and what the screen reader can understand,
based solely on semantic elements
If your website depends solely on one sense to be 
able to use it, it is inherently inaccessible.

🛠️ Replace div and span elements with their 
🛠️ semantically meaningful counterparts
🛠️ (header, paragraph, section, list, etc.)
🛠️ You only have system audio and your keyboard to navigate the page.

💡 You should not need to modify or add any CSS.
💡 Listen to your screen reader as you navigate
💡 the page. As you change elements to their
💡 semantically meaningful counterparts, you
💡 should hear things like "Heading", "List",
💡 and "Button" be described by your screen reader.
`;

const Exercise2 = props => {
  const [showAddToCartSuccess, setShowAddToCartSuccess] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const changeImageIndex = indexIncrement => {
    setImageIndex(oldImageIndex => {
      const newIndex = oldImageIndex + indexIncrement;
      if (newIndex < 0) {
        return 0;
      } else if (newIndex > images.length - 1) {
        return images.length - 1;
      }
      return newIndex;
    });
  };
  const flipAddToCart = () => setShowAddToCartSuccess(oldValue => !oldValue);
  const lightsOnClass =
    props.location.search.indexOf("?lightsOn=true") !== -1 ? "lights-on" : "";

  `⬇️⬇️⬇️⬇️⬇️ Edit code below this line! ⬇️⬇️⬇️⬇️⬇️`;
  return (
    <main className={`Exercise2 ${lightsOnClass}`} tabindex="0">
      {showAddToCartSuccess && (
        <div onClick={flipAddToCart}>Added the wand to your cart!</div>
      )}
      <div>Product Page: Magic Wand</div>
      <img
        className="Exercise2-image"
        src={images[imageIndex]}
        alt="A magic wand"
      />
      <div>
        <button onClick={() => changeImageIndex(-1)}>Previous Picture</button>
        <button onClick={() => changeImageIndex(1)}>Next Picture</button>
      </div>
      <div>
        The magic wand is the latest advancement in portable technology for the
        everyday wizard or witch. It is a portable conduit to magical powers and
        abilities from a world very different from our own. Confound your
        enemies! Teleport across the room to greet your guests! Brew a love
        potion! The possibilities are almost endless!
      </div>
      <div>
        Price: <span>$4,200.19</span>
      </div>
      <div>Features: </div>
      <div>
        <div>Instant access to The Magic Network</div>
        <div>Over 300 spells available to cast</div>
        <div>Wireless charging, 60 minutes for 100% charge</div>
      </div>
      <div>Customer Reviews</div>
      <div>
        <span>
          This wand was so incredible, I was able to pull so many pranks on my
          enemies! - J. Petter
        </span>
      </div>
      <div>
        <span>
          With my magic wand, I could speak with the dead! - T. Roddle
        </span>
      </div>
      <div>
        <span>
          My magic wand gave me so much power, it made me feel so wise. - A.
          Dumblydoor
        </span>
      </div>
      <button onClick={flipAddToCart}>Add to cart</button>
    </main>
  );
  `⬆️⬆️⬆️⬆️⬆️ Edit code above this line! ⬆️⬆️⬆️⬆️⬆️`;
};

`
ℹ️ℹ️ℹ️

  Now that you've added more semantic elements
  to the page, try adding ?lightsOn=true to
  the end of the URL bar to see how the page
  looks _visually_. Notice any differences?

ℹ️ℹ️ℹ️
`;

` 
✅✅✅ 

  When you're done with Exercise 1, click on
  "Exercise 3" in the browser! Then, open 
  'exercises/exercise3/exercise3.js' to
  begin the next exercise!
  
✅✅✅
`;

// ⛔ You should not need to modify anything below this line ⛔
import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "./exercise2.css";

const images = [
  "https://i.imgur.com/No5E9nb.jpg",
  "https://vignette.wikia.nocookie.net/harrypotter/images/b/b2/Luna%27s_Wand.jpg/revision/latest",
  "https://vignette.wikia.nocookie.net/harrypotter/images/5/5c/Wands-Woods.png/revision/latest",
  "https://vignette.wikia.nocookie.net/harrypotter/images/1/14/Pottermore_wands.jpg/revision/latest?cb=20120425215754"
];

export default withRouter(Exercise2);
