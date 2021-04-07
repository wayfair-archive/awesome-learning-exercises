/* eslint-disable no-unused-expressions, import/first, no-use-before-define, no-unreachable, jsx-a11y/alt-text */

`
✅ Exercise 2: To Alt, or not to Alt? ✅
`;

const Exercise2 = () => {
  // You can uncomment this line to see how the
  // changes you've made will appear to screen readers!
  useShowAltTextAfterMedia();

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
          Pass in "aria-labelledby" to the image to point the image
          to existing text that adequately labels it */}
      <section>
        <h2>21st Century Movie Franchises</h2>
        <div className="Exercise2-imageWrapper">
          <img
            aria-labelledby="harryPotterCaption"
            src="img/harry_potter.jpg"
          />
          <p id="harryPotterCaption">
            The Harry Potter movie franchise follows the adventures of Harry
            Potter: The Boy Who Lived, on his quest to learn magic and defeat
            Lord Voldemort.
          </p>
        </div>
        <div className="Exercise2-imageWrapper">
          <img aria-labelledby="avengersCaption" src="img/avengers.jpg" />
          <p id="avengersCaption">
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
          
          https://drive.google.com/file/d/1bQBPRs6K1Q34To-0sm0dv29VJTwCtRf9/view?usp=sharing

          ✅ We also want to add aria-label to the text
            to represent who these emoji are supposed
            to be. */}
      <section>
        <h2>TV characters as depicted by text emoji</h2>
        <div className="Exercise2-imageWrapper">
          <p aria-label="Squidward Tentacles" role="img">
            ಠ_ಠ
          </p>
        </div>
        <div className="Exercise2-imageWrapper">
          <p aria-label="Spongebob and Patrick" role="img">
            (☞ﾟヮﾟ)☞ ☜(ﾟヮﾟ☜)
          </p>
        </div>
        <div className="Exercise2-imageWrapper">
          <p aria-label="Michael Scott" role="img">
            ¯\_(ツ)_/¯
          </p>
        </div>
        <div className="Exercise2-imageWrapper">
          <p aria-label="Jim Halpert" role="img">
            (ᵔᴥᵔ)
          </p>
        </div>
        <div className="Exercise2-imageWrapper">
          <p aria-label="Zuko" role="img">
            ୧(•̀ᗝ•́)૭
          </p>
        </div>
        <div className="Exercise2-imageWrapper">
          <p aria-label="Aang" role="img">
            (づ｡◕‿‿◕｡)づ
          </p>
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

// ⛔ You should not need to modify anything below this line ⛔
import React from "react";
import useShowAltTextAfterMedia from "../../../use_show_alt_text";
import "./../exercise2.css";

export default Exercise2;
