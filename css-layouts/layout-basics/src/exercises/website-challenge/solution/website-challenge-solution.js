import React from "react";
import "./website-challenge-solution.css";

const Hero = () => {
  return (
    <div className="exHero">
      <img src="https://i.imgur.com/xtfNe8M.png" className="exHero-logo" alt="" />
      <img src="https://i.imgur.com/jrV3VwL.jpg" className="exHero-background" alt="" />
    </div>
  );
};

const LINKS = ["Home", "Reservations", "Contact"];

const Navbar = () => {
  return (
    <nav className="exNavbar">
      <div className="exNavbar-logoWrap">
        <img src="https://i.imgur.com/1It2Ytj.png" alt="Corrados Cantina" />
      </div>
      <ul className="exNavbar-linkWrap">
        {LINKS.map(link => (
          <li className="exNavbar-link">
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const MainContent = () => {
  return (
    <>
      <section className="exMainContent-row1">
        <div className="exMainContent-row1-container">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="exMainContent-row1-imageWrap">
            <figure className="exMainContent-row1-image">
              <img src="https://i.imgur.com/AaJSCbu.jpg" alt="Locations" />
            </figure>
            <figure className="exMainContent-row1-image">
              <img src="https://i.imgur.com/CoHeohO.jpg" alt="Menu" />
            </figure>
            <figure className="exMainContent-row1-image">
              <img src="https://i.imgur.com/bf3Odc6.jpg" alt="Gift Cards" />
            </figure>
          </div>
        </div>
      </section>
      <section className="exMainContent-row2">
        <div className="exMainContent-row2-left">
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
        </div>
        <div className="exMainContent-row2-right">
          <h3>Our Location</h3>
          <p>
            520 West Main Street
            <br />
            Chicago, IL
            <br />
            023185
          </p>
        </div>
      </section>
    </>
  );
};

const ChallengeSolution = () => (
  <div className="exPageWrapper">
    <Navbar />
    <Hero />
    <MainContent />
  </div>
);

export default ChallengeSolution;
