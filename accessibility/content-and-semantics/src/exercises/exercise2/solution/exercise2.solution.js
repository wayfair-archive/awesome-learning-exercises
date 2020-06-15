/* eslint-disable no-unused-expressions, import/first, no-use-before-define, no-unreachable */

`
📚 Exercise 2: ARIA Roles Solution 📚
`;

const Exercise2 = () => {
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
    <main className="Exercise2">
      {showAddToCartSuccess && (
        <div aria-live="assertive" onClick={flipAddToCart}>
          Added the wand to your cart!
        </div>
      )}
      <h1>Product Page: Magic Wand</h1>
      <img
        className="Exercise2-image"
        src={images[imageIndex]}
        alt="A magic wand"
      />
      <div>
        <button onClick={() => changeImageIndex(-1)}>Previous Picture</button>
        <button onClick={() => changeImageIndex(1)}>Next Picture</button>
      </div>
      <section>
        <p>
          The magic wand is the latest advancement in portable technology for
          the everyday wizard or witch. It is a portable conduit to magical
          powers and abilities from a world very different from our own.
          Confound your enemies! Teleport across the room to greet your guests!
          Brew a love potion! The possibilities are almost endless!
        </p>
      </section>
      <section>
        Price: <span>$4,200.19</span>
      </section>
      <h2>Features:</h2>
      <ul>
        <li>Instant access to The Magic Network</li>
        <li>Over 300 spells available to cast</li>
        <li>Wireless charging, 60 minutes for 100% charge</li>
      </ul>
      <h2>Customer Reviews</h2>
      <div>
        <blockquote>
          This wand was so incredible, I was able to pull so many pranks on my
          enemies! - J. Petter
        </blockquote>
      </div>
      <div>
        <blockquote>
          With my magic wand, I could speak with the dead! - T. Roddle
        </blockquote>
      </div>
      <div>
        <blockquote>
          My magic wand gave me so much power, it made me feel so wise. - A.
          Dumblydoor
        </blockquote>
      </div>
      <button onClick={flipAddToCart}>Add to cart</button>
    </main>
  );
  `⬆️⬆️⬆️⬆️⬆️ Edit code above this line! ⬆️⬆️⬆️⬆️⬆️`;
};

// ⛔ You should not need to modify anything below this line ⛔
import React, { useState } from "react";
import { withRouter } from "react-router-dom";

const images = [
  "https://i.imgur.com/No5E9nb.jpg",
  "https://vignette.wikia.nocookie.net/harrypotter/images/b/b2/Luna%27s_Wand.jpg/revision/latest",
  "https://vignette.wikia.nocookie.net/harrypotter/images/5/5c/Wands-Woods.png/revision/latest",
  "https://vignette.wikia.nocookie.net/harrypotter/images/1/14/Pottermore_wands.jpg/revision/latest?cb=20120425215754"
];
import "./exercise2.css";

export default withRouter(Exercise2);
