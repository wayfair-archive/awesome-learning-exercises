import React from "react";
import ReactDOM from "react-dom";
import {
  withRouter,
  BrowserRouter,
  NavLink,
  Route,
  Switch
} from "react-router-dom";
import { Block } from "./grid-components";
import ExerciseOne from "./exercises/exercise1/index";
import ExerciseTwo from "./exercises/exercise2/index";
import "./utilities/reset.css";
import "./utilities/base.scss";

const Start = () => {
  return (
    <div className="content">
      <h1>CSS Flexbox</h1>
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
          </nav>
          <Switch>
            <Route exact path="/" component={Start} />
            <Route exact path="/exercise1" component={ExerciseOne} />
            <Route exact path="/exercise2" component={ExerciseTwo} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
