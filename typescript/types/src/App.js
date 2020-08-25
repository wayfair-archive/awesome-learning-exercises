import React from 'react';
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from 'react-router-dom';
import Exercise1 from './exercises/exercise1';

const App = () => (
  <Router>
    <main className='App'>
      <h1>Awesome Learning: TypeScript Types</h1>
      <nav>
        <NavLink
          to="/exercise1"
        >
          Exercise 1
        </NavLink>
      </nav>
      <Switch>
        <Route
          component={Exercise1}
        />
      </Switch>
    </main>
  </Router>
)