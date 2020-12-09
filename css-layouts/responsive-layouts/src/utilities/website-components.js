import React from "react";
import "./website-components.scss";

export const Page = ({ children }) => <main className="Page">{children}</main>;
export const Divider = () => <hr className="Divider" />;

export const HeroImage = () => (
  <div>
    <img
      className="HeroImage"
      src="https://i.imgur.com/9qTediy.jpg"
      alt="Heroic Imagery"
    />
  </div>
);

export const HeroSideContent = () => (
  <section className="HeroSideContent">
    <h1>Welcome</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    </p>
  </section>
);

export const NavigationLinkOne = () => (
  <a className="NavigationLinks-link" href="#top">
    Link A
  </a>
);
export const NavigationLinkTwo = () => (
  <a className="NavigationLinks-link" href="#top">
    Link B
  </a>
);
export const NavigationLinkThree = () => (
  <a className="NavigationLinks-link" href="#top">
    Link C
  </a>
);

export const Logo = () => <div className="Logo">🪐</div>;

export const HamburgerButton = () => (
  <button className="HamburgerButton">
    <span className="HamburgerButton-patty" />
    <span className="HamburgerButton-patty" />
    <span className="HamburgerButton-patty" />
  </button>
);

export const ValuePropOne = () => (
  <div className="ValueProp">
    <img
      src="https://i.imgur.com/aPrzBbC.jpg"
      alt="Coins"
      className="ValueProp-image"
    />
    <p>Pellentesque id nibh</p>
  </div>
);

export const ValuePropTwo = () => (
  <div className="ValueProp">
    <img
      src="https://i.imgur.com/zJ85V8U.jpg"
      alt="Sunflower"
      className="ValueProp-image"
    />
    <p>Facilisis sed odio morbi</p>
  </div>
);

export const ValuePropThree = () => (
  <div className="ValueProp">
    <img
      src="https://i.imgur.com/iC36MaJ.jpg"
      alt="Knot"
      className="ValueProp-image"
    />
    <p>Mauris a diam maecenas</p>
  </div>
);

export const FooterContent = () => (
  <div className="FooterContent">
    Mattis pellentesque id nibh tortor.
    <br />
    <br />
    Copyright ©️
  </div>
);

export const TestimonialOne = () => (
  <article className="Testimonial">
    <p>
      Tellus elementum sagittis vitae et leo duis ut diam quam. Tincidunt nunc
      pulvinar sapien et ligula ullamcorper. Fames ac turpis egestas integer
      eget aliquet nibh. Blandit turpis cursus in hac habitasse platea dictumst.
    </p>
    <p className="Testimonial-author">- Bethany</p>
  </article>
);

export const TestimonialTwo = () => (
  <article className="Testimonial">
    <p>
      Facilisis sed odio morbi quis. Phasellus vestibulum lorem sed risus
      ultricies. Scelerisque purus semper eget duis at tellus at. Vitae congue
      eu consequat ac felis donec et odio pellentesque.{" "}
    </p>
    <p className="Testimonial-author">- Nick</p>
  </article>
);
