/* eslint-disable no-unused-expressions, import/first, no-use-before-define, no-unreachable */

`
📚 Exercise 1: Semantic Elements 📚

Welcome to Exercise 1: Semantic Interaction Elements! 

In this exercise, we are going to introduce you to 
Semantic HTML Elements.

You might recognize some of these elements 
by another name: HTML5 elements. Elements like 
article, nav, footer, and more allow engineers 
and accessible technology to understand the meaning 
and importance of code and sections on a page
without having to do anything extra.

Semantic elements also have default styles, 
interactions, and presentational logic that improve
the usability of any page they're on.

Let's take a look at a page which doesn't have 
many semantic elements. It's a webpage where you can 
add a product to your shopping cart. However, the 
page is difficult to use because of the lack of 
semantic elements.

You want to see different pictures of the magic wand,
and add it to your shopping cart...

🆘 but you can't use your mouse!  🆘
🆘 You can only use your keyboard 🆘 
🆘 to get to the buttons!         🆘

Additionally, you can't properly understand 
important information like pricing or customer reviews.
It all appears as one large block of text. 
If you introduce semantic elements to the page, 
it will be easier to read and navigate.

🛠️ Replace any elements that require interaction (clicking)
🛠️ with their semantically appropriate elements
🛠️ You should then be able to use your keyboard
🛠️ (the tab key) to control the picture buttons
🛠️ and Add to Cart button.

💡 You should not need to change any CSS.
💡 Feel free to add additional HTML elements
💡 to the DOM; it's OK if the number of elements
💡 is greater or smaller than the initial number
💡 of elements.
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
        <div onClick={() => changeImageIndex(-1)}>Previous Picture</div>
        <div onClick={() => changeImageIndex(1)}>Next Picture</div>
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
          Dumblydrawer
        </span>
      </div>
      <div onClick={flipAddToCart}>Add to cart</div>
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

// ⛔ You should not need to modify anything below this line ⛔
import React, { useState } from "react";
import "./exercise1.css";

const images = [
  "https://i.imgur.com/No5E9nb.jpg",
  "https://vignette.wikia.nocookie.net/harrypotter/images/b/b2/Luna%27s_Wand.jpg/revision/latest",
  "https://vignette.wikia.nocookie.net/harrypotter/images/5/5c/Wands-Woods.png/revision/latest",
  "https://vignette.wikia.nocookie.net/harrypotter/images/1/14/Pottermore_wands.jpg/revision/latest?cb=20120425215754"
];
export default Exercise1;
