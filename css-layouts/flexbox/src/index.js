import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import ExerciseOne from "./exercises/exercise1/index";
import ExerciseTwo from "./exercises/exercise2/index";
import ExerciseThree from "./exercises/exercise3/index";
import "./utilities/reset.css";
import "./utilities/base.scss";

const Start = () => {
  return (
    <div className="MainContent-welcome">
      <h1>Flexbox & Responsive Layouts</h1>
      <p>
        Welcome to the CSS Awesome Learning Flexbox Exercises! Start with
        "Exercise 1" from the above navigation tabs to begin.
      </p>
    </div>
  );
};

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <nav className="PageHeader-nav">
            <NavLink
              activeClassName="PageHeader-navButton--isActive"
              className="PageHeader-navButton"
              to="/"
            >
              <span>Home</span>
            </NavLink>
            <NavLink
              activeClassName="PageHeader-navButton--isActive"
              className="PageHeader-navButton"
              to="/exercise1"
            >
              <span>Exercise 1</span>
            </NavLink>
            <NavLink
              activeClassName="PageHeader-navButton--isActive"
              className="PageHeader-navButton"
              to="/exercise2"
            >
              <span>Exercise 2</span>
            </NavLink>
            {/* <NavLink
              activeClassName="PageHeader-navButton--isActive"
              className="PageHeader-navButton"
              to="/exercise3"
            >
              <span>Exercise 3</span>
            </NavLink> */}
          </nav>
          <div className="MainContent">
            <Switch>
              <Route exact path="/" component={Start} />
              <Route exact path="/exercise1" component={ExerciseOne} />
              <Route exact path="/exercise2" component={ExerciseTwo} />
              <Route exact path="/exercise3" component={ExerciseThree} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
