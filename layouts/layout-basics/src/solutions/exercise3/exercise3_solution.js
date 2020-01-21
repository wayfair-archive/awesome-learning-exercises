import React from "react";
import "./exercise3_solution.css";

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
        </div>
        <div className="exMainContent-row1-container">
          <figure className="exMainContent-row1-image">
            <img src="resources/Locations.jpg" alt="Locations" />
          </figure>
          <figure className="exMainContent-row1-image">
            <img src="resources/Menu.jpg" alt="Menu" />
          </figure>
          <figure className="exMainContent-row1-image">
            <img src="resources/Giftcards.jpg" alt="Gift Cards" />
          </figure>
        </div>
      </section>
      <section className="exMainContent-row2">
        <div className="exMainContent-row2-left">
          <h2>Store Hours</h2>
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
          <h2>Me</h2>
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

export default MainContent;