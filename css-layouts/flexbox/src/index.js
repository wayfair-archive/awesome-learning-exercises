import React from "react";
import ReactDOM from "react-dom";
import {
  withRouter,
  BrowserRouter,
  NavLink,
  Route,
  Switch
} from "react-router-dom";
import ExerciseOne from "./exercises/exercise1/exercise1";
import "./styles.scss";
import "./reset.css";

const Start = () => {
  return (
    <div style={{ border: "10px solid purple" }}>
      <p>This will become the landing page</p>

      <p>To start, take a look at the "grid-components" files.</p>
    </div>
  );
};

class App extends React.Component {
  render() {
    return (
      <nav className="NavBar">
        <BrowserRouter>
          <NavLink
            activeClassName="NavBar-button--isActive"
            className="NavBar-button"
            to="/"
          >
            <span>Start</span>
          </NavLink>
          <NavLink
            activeClassName="NavBar-button--isActive"
            className="NavBar-button"
            to="/exercise1"
          >
            <span>Exercise 1</span>
          </NavLink>
          <Switch>
            <Route exact path="/" component={Start} />
            <Route exact path="/exercise1" component={ExerciseOne} />
          </Switch>
        </BrowserRouter>
      </nav>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
