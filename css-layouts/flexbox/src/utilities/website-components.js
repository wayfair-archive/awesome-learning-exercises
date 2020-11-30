import React from "react";
import cx from "classnames";
import "./website-components.scss";

export const Page = ({ children }) => <main className="Page">{children}</main>;
export const Divider = () => <hr className="Divider" />;

export const HeroImage = () => (
  <div>
    <img
      className="HeroImage"
      src="https://loremflickr.com/640/360"
      alt="Heroic Imagery"
    />
  </div>
);

export const HeroSideContent = () => (
  <section className="HeroSideContent">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    {/* tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. */}
    {/* Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. */}
  </section>
);

export const NavigationLinks = () => (
  <>
    <a className="NavigationLinks-link">Link A</a>
    <a className="NavigationLinks-link">Link A</a>
    <a className="NavigationLinks-link">Link A</a>
  </>
);

export const Logo = () => <div className="Logo">😀</div>;

export const HamburgerButton = () => (
  <button className="HamburgerButton">
    <span className="HamburgerButton-patty" />
    <span className="HamburgerButton-patty" />
    <span className="HamburgerButton-patty" />
  </button>
);

export const ValueProps = () => <div className="ValueProps">😀</div>;
