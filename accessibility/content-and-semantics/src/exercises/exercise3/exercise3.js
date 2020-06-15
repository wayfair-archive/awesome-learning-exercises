/* eslint-disable no-unused-expressions, import/first, no-use-before-define, no-unreachable */
`
📚 Exercise 3: Skip Navigation 📚

Welcome to Exercise 3: Skip Navigation!

This last exercise will focus on 
how to implement a "skip nav" to allow 
screen readers to skip a navigation menu.

What happens when you want to skip a very 
long and complex navigation menu? What if 
you just want to get to the main content? 
With your eyes and a mouse, you can scroll
past the navigation, but what if you aren't
able to do that?

Using something called a "skip nav", visitors that
rely on keyboard navigation can effectively "skip" 
the navigation and go right to the main content.

Go to https://www.wayfair.com/ 
(if there's a popup, dismiss it),
then hit the Tab key on your keyboard. 
In the top-left of the page, you should see a 
button that says "Skip to Main Content".
Hitting Enter will allow you to skip 
the entire navigation and proceed to the main 
content of the home page!

Navigation can also be used to skip to different
sections of a page. If you're only able to use
a keyboard, and can't scroll down a page with a mouse, 
you'd want to be able to see what else is on the page.

🛠️ Implement a "skip nav" feature for keyboards,
🛠️ where visitors can skip the navigation and
🛠️ go right to the main content of the page.
🛠️ Additionally, update the navigation to skip
🛠️ to the appropriate sections of the page.
🛠️ You will need EITHER custom CSS or JavaScript
🛠️ to achieve this.

💡 You will want to open the CodeSandbox app
💡 in a new window or tab to realistically
💡 portray how visitors will see your site
💡 (outside of a code editor.)
💡 Copy the link under the "Browser" tab near
💡 the top-right of the page!

`;

const Exercise3 = () => (
  <div className="Exercise3">
    <h1 className="Exercise3-pageTitle">Science and Magic Encyclopedia</h1>
    <nav className="Exercise3-nav">
      <a>Wands</a>
      <a>Lightsabers</a>
      <a>Pokemon</a>
      <a>Heroic Wares</a>
      <a>Potions</a>
    </nav>
    <MainContent />
  </div>
);

// ⛔ You should not need to modify anything below this line ⛔

const MainContent = () => (
  <main id="maincontent">
    <section id="wands">
      <h2>Wands</h2>
      <p>
        Wands! So many wands here! Check out this smart lad getting a wand of
        his own:
      </p>
      <img
        alt="A wand choosing its owner"
        src="https://vignette.wikia.nocookie.net/harrypotter/images/5/5d/PS_Harry_getting_his_wand.gif"
      />
      <p>
        Wands have the ability to perform incredible feats of power and
        trickery.
      </p>
      <p>Check out this brand new wand, straight from the Americas!</p>
      <img
        alt="The energy of a wand shaterring a window and cliffside"
        src="https://vignette.wikia.nocookie.net/harrypotter/images/1/18/Credence_testing_his_wand.gif/revision/latest/scale-to-width-down/250?cb=20190325021641"
      />
    </section>
    <section id="lightsabers">
      <h2>Lightsabers</h2>
      <p>
        Lots of lightsabers! Witness this intense and fierce duel between these
        Jedi!
      </p>
      <img
        alt="A lightsaber duel"
        src="https://media1.giphy.com/media/8IZCR0wzEIQms/giphy.gif"
      />
    </section>
    <section id="pokemon">
      <h2>Pokemon</h2>
      <p>You thought we were selling actual Pokemon, didn't you?</p>
      <p>
        Nope, we just sell stuff to help trainers catch Pokemon the old
        fashioned way!
      </p>
      <img
        alt="A Pokedex"
        src="https://img.rankedboost.com/wp-content/uploads/2016/07/Pokemon-Go-Pok%C3%A9dex.png"
      />
    </section>
    <section id="heroicwares">
      <h2>Heroic Wares</h2>
      <p>
        Are you more of the adventurous, heroic type? We've got everything you
        need to beat those dungeons and find your archenemy!
      </p>
      <img
        alt="Hylian Shield"
        src="https://gamepedia.cursecdn.com/zelda_gamepedia_en/thumb/2/2a/TPHD_Hylian_Shield_Artwork.png/267px-TPHD_Hylian_Shield_Artwork.png?version=ecd11d03b316e453f1f5740cbf095e8d"
      />
    </section>
    <section id="potions">
      <h2>Potions</h2>
      <p>
        Last but not least, we've got potions to keep you safe on the
        battlefield (or wherever you are)!
      </p>
      <img
        alt="Potion"
        src="https://www.khwiki.com/images/3/37/Potion_KHII.png"
      />
    </section>
  </main>
);

import React from "react";
import "./exercise3.css";

export default Exercise3;
