import React from "react";
import "./exercise2_solution.css";

const LINKS = ["Home", "Reservations", "Contact"];

const Navbar = () => {
  return (
    <nav className="exNavbar">
      <div className="exNavbar-logoWrap">
        <img src="resources/small-logo.png" />
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

export default Navbar;
