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
      <div>
        <BrowserRouter>
          <NavLink
            activeClassName="NavButton--isActive"
            className="NavButton"
            to="/"
          >
            <span>Home</span>
          </NavLink>
          <NavLink
            activeClassName="NavButton--isActive"
            className="NavButton"
            to="/exercise1"
          >
            <span>Exercise 1</span>
          </NavLink>
          <Switch>
            <Route exact path="/" component={Start} />
            <Route exact path="/exercise1" component={ExerciseOne} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
