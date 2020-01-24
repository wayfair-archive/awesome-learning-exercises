import React from "react";
/* 
  CSS rules for this component and exercise should be added
  to the CSS file below

  The mock for the website can be located in the public/resources folder
*/
import "./website-challenge.css";

/*
  First is the main hero section. This section is comprised of a large background image,
  and another logo image centered on top of it.

  Instructions: Follow along with the provided mock and build out the hero section.

  Key concepts: box-model, positioning, stacking

*/
const Hero = () => (
  <div>
    <img src="https://i.imgur.com/xtfNe8M.png" alt="Corrados Cantina" />
    <img src="https://i.imgur.com/UNBAao6.jpg" alt="" />
  </div>
);

/*
  The next part of this exercise will be building the sticky navigation
  
  NOTE: pay close attention to the suggested navbar behavior!

  Key concepts: borders & color, box-model, positioning, floats

*/

const LINKS = ["Home", "Reservations", "Contact"];

const Navbar = () => {
  return (
    <nav>
      <img src="https://i.imgur.com/1It2Ytj.png" alt="Corrados Cantina" />
      <ul>
        {LINKS.map(link => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

/*
  Finally, style the main content sections. 

  Key concepts: borders & color, box-model, floats

*/

const MainContent = () => (
  <div>
    <section>
      <img src="https://i.imgur.com/AaJSCbu.jpg" alt="Locations" />
      <img src="https://i.imgur.com/CoHeohO.jpg" alt="Menu" />
      <img src="https://i.imgur.com/bf3Odc6.jpg" alt="Gift Cards" />
    </section>
    <section>
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <button>Learn More</button>
    </section>
    <section>
      <h3>Store Hours</h3>
      <ul>
        <li>Monday 12:00 AM - 9:00 PM</li>
        <li>Tuesday 12:00 AM - 9:00 PM</li>
        <li>Wednesday 12:00 AM - 9:00 PM</li>
        <li>Thursday 12:00 AM - 9:00 PM</li>
        <li>Friday 12:00 AM - 9:00 PM</li>
        <li>Saturday 12:00 AM - 9:00 PM</li>
        <li>Sunday 12:00 AM - 9:00 PM</li>
      </ul>
    </section>
    <section>
      <h3>Me</h3>
      <p>
        520 West Main Street
        <br />
        Chicago, IL
        <br />
        023185
      </p>
    </section>
  </div>
);

const Challenge = () => (
  <div>
    <Navbar />
    <Hero />
    <MainContent />
  </div>
);

export default Challenge;
