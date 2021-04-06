/* eslint-disable no-unused-expressions, import/first, no-use-before-define, no-unreachable, jsx-a11y/alt-text */

`
✅ Exercise 2: To Alt, or not to Alt? ✅
`;

const Exercise2 = () => {
  // You can uncomment this line to see how the
  // changes you've made will appear to screen readers!
  // useShowAltTextAfterMedia();

  `⬇️⬇️⬇️⬇️⬇️ Edit code below this line! ⬇️⬇️⬇️⬇️⬇️`;
  return (
    <main className="Exercise2">
      <section className="Exercise2-part1">
        {/* ✅ Add "alt" attributes to these images to describe
            who is in them */}
        <h2>Turn of the Century Animated Movie Characters</h2>
        <div className="Exercise2-imageWrapper">
          <img alt="The Iron Giant" src="img/iron_giant.jpg" />
        </div>
        <div className="Exercise2-imageWrapper">
          <img alt="Mulan" src="img/mulan.jpg" />
        </div>
        <div className="Exercise2-imageWrapper">
          <img alt="Shrek" src="img/shrek.jpg" />
        </div>
        <div className="Exercise2-imageWrapper">
          <img alt="Manny the Mammoth" src="img/manny.jpg" />
        </div>
      </section>

      {/* ✅ Each image can be adequately described
          by the text that follows the image
          Provide a blank alt attribute to
          indicate that these images are decorative
          and do not contain anything that should be
          announced */}
      <section>
        <h2>21st Century Movie Franchises</h2>
        <div className="Exercise2-imageWrapper">
          <img alt="" src="img/harry_potter.jpg" />
          <p>
            The Harry Potter movie franchise follows the adventures of Harry
            Potter: The Boy Who Lived, on his quest to learn magic and defeat
            Lord Voldemort.
          </p>
        </div>
        <div className="Exercise2-imageWrapper">
          <img alt="" src="img/avengers.jpg" />
          <p>
            The Avengers: Earth's Mightiest Heroes, the last line of defense
            against threats to the safety and wellbeing of Earth.
          </p>
        </div>
      </section>
      {/* ✅ Each paragraph tag with the text emoji needs
          to be given role="img" to indicate that it
          is an image. Someone with a screen reader
          would not know that these text emojis are images,
          and screen readers would attempt to read the text
          out as text, which can lead to some very confusing
          results. 
          We also need to add "aria-hidden" to indicate
          that these elements should be hidden from assistive
          technology. */}
      <section>
        <h2>TV characters as depicted by text emoji</h2>
        <div className="Exercise2-imageWrapper">
          <p aria-hidden role="img">
            ಠ_ಠ
          </p>
          <p>Squidward Tentacles</p>
        </div>
        <div className="Exercise2-imageWrapper">
          <p aria-hidden role="img">
            (☞ﾟヮﾟ)☞ ☜(ﾟヮﾟ☜)
          </p>
          <p>Spongebob Squarepants and Patrick Star</p>
        </div>
        <div className="Exercise2-imageWrapper">
          <p aria-hidden role="img">
            ¯\_(ツ)_/¯
          </p>
          <p>Michael Scott</p>
        </div>
        <div className="Exercise2-imageWrapper">
          <p aria-hidden role="img">
            (ᵔᴥᵔ)
          </p>
          <p>Jim Halpert</p>
        </div>
        <div className="Exercise2-imageWrapper">
          <p aria-hidden role="img">
            ୧(•̀ᗝ•́)૭
          </p>
          <p>Zuko</p>
        </div>
        <div className="Exercise2-imageWrapper">
          <p aria-hidden role="img">
            (づ｡◕‿‿◕｡)づ
          </p>
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
import React, { useEffect } from "react";
import "./../exercise2.css";

export default Exercise2;
