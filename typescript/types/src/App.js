import React, {Component} from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch
} from "react-router-dom";
import Exercise1 from "./exercises/exercise1/exercise1_layout";

class App extends Component {
  render() {
    console.log('in app')
    return (
      <Router>
        <main className="App">
          <h1>Awesome Learning: TypeScript Types</h1>
          <nav>
            <NavLink to="/exercise1">Exercise 1</NavLink>
          </nav>
          <Switch>
            <Route component={Exercise1} />
          </Switch>
        </main>
      </Router>
    );
  }
};

export default App;
