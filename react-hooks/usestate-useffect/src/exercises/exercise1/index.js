/* eslint-disable no-unused-expressions, import/first */
`
📚 Exercise 1 - Making a Stateless Component Stateful 📚
 
  Welcome to Exercise 1! In your browser, make sure "Exercise 1" 
  is bold in the browser navigation before proceeding. 

  We are working with a form that does not manage its own state; the inputs
  in the form take input, but they don't currently send it anywhere.
  This exercise will make this form stateful, and validate its fields!

  🛠️ Open 'part1.js' in this folder when you're ready to start!
`;

// Exercise setup, ignore everything below this line
import React, { Component } from 'react';
import Exercise1Part1 from './part1';
import Exercise1Part2 from './part2';

class Exercise1 extends Component {
  state = {
    isOnPart1: true,
  };

  handleButtonClick = () => {
    this.setState((prevState) => ({
      isOnPart1: !prevState.isOnPart1,
    }));
  };

  render() {
    return (
      <section>
        <button onClick={this.handleButtonClick}>
          {this.state.isOnPart1
            ? 'Advance to Part 2'
            : 'Return to Part 1'}
        </button>
        <p>
          Check out{' '}
          <code className="inlineCode">
            exercises/exercise1/index.js
          </code>{' '}
          to start Exercise 1!
        </p>
        {this.state.isOnPart1 ? (
          <Exercise1Part1 />
        ) : (
          <Exercise1Part2 />
        )}
      </section>
    );
  }
}

export default Exercise1;
