/* eslint-disable no-unused-expressions, import/first */
`
📚 Exercise 2 - Data Fetching with Hooks 📚
 
  Welcome to Exercise 2! In your browser, make sure "Exercise 2" 
  is bold in the browser navigation before proceeding. 

  We are working with a new component that we
  want to add data-fetching functionality to.
  
  🛠️ Open 'part1.js' in this folder when you're ready to start!
`;

// ⛔ Exercise setup, ignore everything below this line
import React, { useState } from 'react';
import Exercise2Part1 from './part1';
import Exercise2Part2 from './part2';

const Exercise2 = () => {
  const [isOnPart1, updateIsOnPart1] = useState(
    true
  );
  const handleButtonClick = () => {
    updateIsOnPart1((prevValue) => !prevValue);
  };
  return (
    <section>
      <button onClick={handleButtonClick}>
        {isOnPart1
          ? 'Advance to Part 2'
          : 'Return to Part 1'}
      </button>
      <p>
        Check out{' '}
        <code className="inlineCode">
          exercises/exercise2/index.js
        </code>{' '}
        to start Exercise 2!
      </p>
      {isOnPart1 ? (
        <Exercise2Part1 />
      ) : (
        <Exercise2Part2 />
      )}
    </section>
  );
};

export default Exercise2;
