import React from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import Exercise1 from "./exercises/exercise1/exercise1";
import Exercise2 from "./exercises/exercise2/exercise2";
import Exercise3 from "./exercises/exercise3/exercise3";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <div aria-live="assertive" className="App">
          <div className="App-navWrapper">
            <h1>
              Awesome Learning: Accessibility: Defining Content and Semantics
            </h1>
            <nav className="App-nav">
              <NavLink
                activeClassName="App-navLink--isActive"
                className="App-navLink"
                to="/exercise1"
              >
                Exercise 1
              </NavLink>
              <NavLink
                activeClassName="App-navLink--isActive"
                className="App-navLink"
                to="/exercise2"
              >
                Exercise 2
              </NavLink>
              <NavLink
                activeClassName="App-navLink--isActive"
                className="App-navLink"
                to="/exercise3"
              >
                Exercise 3
              </NavLink>
            </nav>
          </div>
          <hr />
          <Switch>
            <Route exact path="/exercise1" component={Exercise1} />
            <Route exact path="/exercise2" component={Exercise2} />
            <Route exact path="/exercise3" component={Exercise3} />
            <Route
              component={() => (
                <p>
                  Welcome to Awesome Learning: Accessibility, Lesson 1. When
                  you're ready to begin, click on "Exercise 1" in the above
                  navigation, and open{" "}
                  <b>
                    <tt>src/exercises/exercise1/exercise1.js</tt>
                  </b>{" "}
                  in your editor!
                </p>
              )}
            />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}
