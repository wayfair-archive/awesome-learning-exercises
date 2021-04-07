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
  useShowAltTextAfterMedia();

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
      {/* Screen readers struggle to read text like this.
          Check out this video to see how 
          these text emoji are pronounced
          with assistive technology.

          https://drive.google.com/file/d/1bQBPRs6K1Q34To-0sm0dv29VJTwCtRf9/view?usp=sharing
          
          How can you fix this? 
          
          🎉 Add your own labels and descriptions
          🎉 of the characters you think are depicted
          🎉 by these emoji! Have fun with it!
          */}
      <section>
        <h2>TV characters as depicted by text emoji</h2>
        <div className="Exercise2-imageWrapper">
          <p>ಠ_ಠ</p>
        </div>
        <div className="Exercise2-imageWrapper">
          <p>(☞ﾟヮﾟ)☞ ☜(ﾟヮﾟ☜)</p>
        </div>
        <div className="Exercise2-imageWrapper">
          <p>¯\_(ツ)_/¯</p>
        </div>
        <div className="Exercise2-imageWrapper">
          <p>(ᵔᴥᵔ)</p>
        </div>
        <div className="Exercise2-imageWrapper">
          <p>୧(•̀ᗝ•́)૭</p>
        </div>
        <div className="Exercise2-imageWrapper">
          <p>(づ｡◕‿‿◕｡)づ</p>
        </div>
      </section>
    </main>
  );
  `⬆️⬆️⬆️⬆️⬆️ Edit code above this line! ⬆️⬆️⬆️⬆️⬆️`;
};

` 
✅✅✅ 

  When you're done with Exercise 2, click on
  "Exercise 3" in the browser! Then, open 
  'exercises/exercise3/exercise3.js' to
  begin the next exercise!
  
✅✅✅
`;

// ⛔ You should not need to modify anything below this line ⛔
import React from "react";
import useShowAltTextAfterMedia from "../../use_show_alt_text";
import "./exercise2.css";

export default Exercise2;
