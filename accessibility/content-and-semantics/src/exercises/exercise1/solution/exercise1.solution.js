/* eslint-disable no-unused-expressions, import/first, no-use-before-define, no-unreachable */

`
📚 Exercise 1: Semantic Elements Solution 📚

📘 The solution can be done in many different 
📘 ways, but the most important thing is to 
📘 replace elements with "onClick" attributes 
📘 with "button" elements. You should always 
📘 use "button" or "a" elements to trigger 
📘 some sort of action on click. 
📘 "div" elements with "onclick" attributes cannot 
📘 be tabbed to by default, and are not 
📘 represented as clickable elements 
📘 to screen readers.
`;

const Exercise1 = () => {
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

  `⬇️⬇️⬇️⬇️⬇️ Edit code below this line! ⬇️⬇️⬇️⬇️⬇️`;
  return (
    <div className="Exercise1">
      {showAddToCartSuccess && (
        <div onClick={flipAddToCart}>Added the wand to your cart!</div>
      )}
      <div>Product Page: Magic Wand</div>
      <img
        className="Exercise1-image"
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
    </div>
  );
  `⬆️⬆️⬆️⬆️⬆️ Edit code above this line! ⬆️⬆️⬆️⬆️⬆️`;
};

` 
✅✅✅ 

  When you're done with Exercise 1, click on
  "Exercise 2" in the browser! Then, open 
  'exercises/exercise2/exercise2.js' to
  begin the next exercise!
  
✅✅✅
`;

// ⛔ You should not need to modify anything below this line
import React, { useState } from "react";
import "./exercise1.css";
const images = [
  "https://i.imgur.com/No5E9nb.jpg",
  "https://vignette.wikia.nocookie.net/harrypotter/images/b/b2/Luna%27s_Wand.jpg/revision/latest",
  "https://vignette.wikia.nocookie.net/harrypotter/images/5/5c/Wands-Woods.png/revision/latest",
  "https://vignette.wikia.nocookie.net/harrypotter/images/1/14/Pottermore_wands.jpg/revision/latest?cb=20120425215754"
];

export default Exercise1;
