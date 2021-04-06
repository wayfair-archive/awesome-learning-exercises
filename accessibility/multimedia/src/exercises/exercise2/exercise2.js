/* eslint-disable no-unused-expressions, import/first, no-use-before-define, no-unreachable, jsx-a11y/alt-text */

`
📚 Exercise 2: To Alt, or not to Alt? 📚

Welcome to Exercise 2: To Alt or not to Alt?

Alternative text (often abbreviated as "alt text")
is a universal way of describing how
images or visual media look to screen readers
and other technology. It can be added in one
of a few ways:

* alt="" on an image
* aria-label="" on an element
   or group of elements
* aria-labelledby="": On an element(s) "A", this
   attribute refers to the ID of 
   another element "B". The text content 
   of element "B" is then read as the 
   label for element(s) "A"
* Visually hidden text: Putting text next
   to an element that is invisble to sighted
   users, but is discoverable by assitive technology

We want to include alt text for images and
visual media that are significant to the page,
or for visual media that can be interacted with
(like a button), but does not have 
any accompanying text.

Examples: 
* The image of a sofa on the product page
* A notification button with a bell icon

But there are also situations in which you
do not need alt text, and adding it would
actually be detrimental to the experience.
When there is already accompanying text for
an image, it should be explicitly specified
that there is no alternative text for this
element, because there is text near the media
that accompanies it.

In this exercise, we display the contents of
an image's alt text near the image. This is
abnormal on a webpage, but we're doing it
here to make it easier for you to see
how alt text contributes to the accessibility
and usability of a page.

🛠️ Add alt text to elements where you think it's
🛠️ missing, or remove it from elements where
🛠️ it's not necessary. You'll need to use
🛠️ the "alt", "aria-label", or "aria-labelledby"
🛠️ attributes to accomplish this!

💡 You should not need to modify or add any CSS.
💡 Remember: Alt text should convey meaningful
💡 information about media. What would someone
💡 who cannot see an image want to know about it?
💡 We also provide a CSS class: "Exercise2-visuallyHidden",
💡 that hides a text from sighted users, but allows screen
💡 readers to still find the text.
`;

const Exercise2 = () => {
  // You can uncomment this line to see how the
  // changes you've made will appear to screen readers!
  // useShowAltTextAfterMedia();

  `⬇️⬇️⬇️⬇️⬇️ Edit code below this line! ⬇️⬇️⬇️⬇️⬇️`;
  return (
    <main className="Exercise2">
      <section className="Exercise2-part1">
        {/* Can you describe who is in these pictures
            to people who can't see them? */}
        {/* Hint: alt */}
        <h2>Turn of the Century Animated Movie Characters</h2>
        <div className="Exercise2-imageWrapper">
          <img src="img/iron_giant.jpg" />
        </div>
        <div className="Exercise2-imageWrapper">
          <img src="img/mulan.jpg" />
        </div>
        <div className="Exercise2-imageWrapper">
          <img src="img/shrek.jpg" />
        </div>
        <div className="Exercise2-imageWrapper">
          <img src="img/manny.jpg" />
        </div>
      </section>

      {/* How can you associate each image with its descriptive text? */}
      {/* Hint: aria-labelledby */}
      <section>
        <h2>21st Century Movie Franchises</h2>
        <div className="Exercise2-imageWrapper">
          <img src="img/harry_potter.jpg" />
          The Harry Potter movie franchise follows the adventures of Harry
          Potter: The Boy Who Lived, on his quest to learn magic and defeat Lord
          Voldemort.
        </div>
        <div className="Exercise2-imageWrapper">
          <img src="img/avengers.jpg" />
          The Avengers: Earth's Mightiest Heroes, the last line of defense
          against threats to the safety and wellbeing of Earth.
        </div>
      </section>
      {/* What would you do to label this text emoji as imagery,
          and then associate the emoji with its corresponding text? */}
      <section>
        <h2>TV characters as depicted by text emoji</h2>
        <div className="Exercise2-imageWrapper">
          <p>ಠ_ಠ</p>
          <p>Squidward Tentacles</p>
        </div>
        <div className="Exercise2-imageWrapper">
          <p>(☞ﾟヮﾟ)☞ ☜(ﾟヮﾟ☜)</p>
          <p>Spongebob Squarepants and Patrick Star</p>
        </div>
        <div className="Exercise2-imageWrapper">
          <p>¯\_(ツ)_/¯</p>
          <p>Michael Scott</p>
        </div>
        <div className="Exercise2-imageWrapper">
          <p>(ᵔᴥᵔ)</p>
          <p>Jim Halpert</p>
        </div>
        <div className="Exercise2-imageWrapper">
          <p>୧(•̀ᗝ•́)૭</p>
          <p>Zuko</p>
        </div>
        <div className="Exercise2-imageWrapper">
          <p>(づ｡◕‿‿◕｡)づ</p>
          <p>Aang</p>
        </div>
      </section>
    </main>
  );
  `⬆️⬆️⬆️⬆️⬆️ Edit code above this line! ⬆️⬆️⬆️⬆️⬆️`;
};

` 
✅✅✅ 

  When you're done with Exercise 1, click on
  "Exercise 3" in the browser! Then, open 
  'exercises/exercise3/exercise3.js' to
  begin the next exercise!
  
✅✅✅
`;

// Adds alt text, aria labels, and aria-labelledby text
// near their respective elements. This makes it easier
// for learners to see how alternative text is shown
// to assistive technology so that they don't need
// to set it up.
// With a screen reader, this text is duplicative.
// It's extracted to a function so learners can
// comment it out if they want to go through this
// exercise with a screen reader.
function useShowAltTextAfterMedia() {
  useEffect(() => {
    // Get rid of all other elements that were added
    // by previous executions of this effect
    document
      .querySelectorAll(".Exercise2-tempElement")
      .forEach((element) => element.remove());
    // Find all elements with alt text
    const images = document.querySelectorAll("img[alt]");
    // Next to every image with an "alt" tag, append
    // a caption with the contents of its alt text
    images.forEach((image) => {
      const caption = document.createElement("span");
      caption.setAttribute("class", "Exercise2-imageAlt Exercise2-tempElement");
      const altText = image.getAttribute("alt");
      // If there's alt text for this image,
      // add it immediately after the image
      if (!!altText) {
        caption.innerText = altText;
        image.insertAdjacentElement("afterend", caption);
      }
    });

    // aria-label
    const elementsWithLabels = document.querySelectorAll("[aria-label]");
    elementsWithLabels.forEach((element) => {
      const caption = document.createElement("span");
      caption.setAttribute("class", "Exercise2-imageAlt Exercise2-tempElement");
      const label = element.getAttribute("aria-label");
      // If there's alt text for this image,
      // add it immediately after the image
      if (!!label) {
        // Add ", image" to the end to emulate how a screenreader
        // would announce the image
        caption.innerText = `${label}, image`;
        element.insertAdjacentElement("beforebegin", caption);
      }
    });
  });
}

// ⛔ You should not need to modify anything below this line ⛔
import React, { useState, useEffect } from "react";
import "./exercise2.css";

export default Exercise2;
