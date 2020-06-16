import React from "react";
import ReactDOM from "react-dom";
import {
  withRouter,
  BrowserRouter,
  NavLink,
  Route,
  Switch
} from "react-router-dom";

const Start = () => {
  <p>Hello Walt</p>
}

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavLink
            activeClassName="PageHeader-navButton--isActive"
            className="PageHeader-navButton"
            to="/start"
          >
            <span>Go</span>
          </NavLink>
          <Switch>
            <Route exact path="/start" component={Start} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
