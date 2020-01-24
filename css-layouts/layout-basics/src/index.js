import React from "react";
import ReactDOM from "react-dom";
import {
  withRouter,
  BrowserRouter,
  NavLink,
  Route,
  Switch
} from "react-router-dom";
import cx from "classnames";
import BoxModel from "./exercises/exercise1/box-model";
import Positioning from "./exercises/exercise2/positioning";
import Floats from "./exercises/exercise3/floats";
import Challenge from "./exercises/website-challenge/website-challenge";
import Solution from "./exercises/website-challenge/solution/website-challenge-solution";

import "./normalize.css";
import "./styles.scss";

const NAV_LINKS = [
  {
    name: "Box Model",
    href: "/box-model"
  },
  {
    name: "Positioning",
    href: "/positioning"
  },
  {
    name: "Floats",
    href: "/floats"
  },
  {
    name: "Website Challenge",
    href: "/challenge-start"
  }
];

const Navigation = withRouter(({ location }) => {
  const isLandingPage = location.pathname === "/";

  const exerciseNumber =
    NAV_LINKS.indexOf(NAV_LINKS.find(x => x.href === location.pathname)) + 1;

  const shouldShowHeader =
    location.pathname !== "/website-challenge" &&
    location.pathname !== "/website-solution";

  return (
    <div
      className={cx("PageHeader", {
        "PageHeader--withBody": shouldShowHeader
      })}
    >
      {shouldShowHeader && (
        <div className="PageHeader-topWrap">
          <h1 className="PageHeader-title">CSS Layout</h1>
          <p className="PageHeader-subtitle">
            {isLandingPage ? (
              <>
                Welcome to the CSS Awesome Learning Exercises. Click on "Box
                Model" to begin.
              </>
            ) : (
              <>
                Check out 'exercises/exercise{exerciseNumber}
                {location.pathname}.css' to view the stylesheet for these
                questions.
              </>
            )}
          </p>
          <div className="PageHeader-menuWrap">
            <ul className="PageHeader-menu">
              {NAV_LINKS.map(link => (
                <li className="PageHeader-menuItem" key={link.name}>
                  <NavLink
                    activeClassName="PageHeader-navButton--isActive"
                    className="PageHeader-navButton"
                    to={link.href}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
});

const ChallengeLanding = () => {
  return (
    <div>
      <p>
        The final part of the Awesome Learning will involve styling a whole page
        from scratch.
      </p>
      <br />
      <p>
        <NavLink
          activeClassName="PageHeader-button--isActive"
          className="PageHeader-button"
          to="/website-challenge"
        >
          View Unstyled Page
        </NavLink>
      </p>
      <br />
      <p>
        Once you navigate to the final challenge place, you can use the
        codesandbox browser back button to return here. When you are satisfied
        with your results, click the button below to compare with the solution
        provided.
      </p>
      <br />
      <p>
        <NavLink
          activeClassName="PageHeader-button--isActive"
          className="PageHeader-button"
          to="/website-challenge"
        >
          View Solution
        </NavLink>
      </p>
    </div>
  );
};

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <div className="PageHeader-routeWrap">
          <Switch>
            <Route exact path="/box-model" component={BoxModel} />
            <Route exact path="/positioning" component={Positioning} />
            <Route exact path="/floats" component={Floats} />
            <Route exact path="/challenge-start" component={ChallengeLanding} />
            <Route exact path="/website-challenge" component={Challenge} />
            <Route exact path="/website-solution" component={Solution} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
