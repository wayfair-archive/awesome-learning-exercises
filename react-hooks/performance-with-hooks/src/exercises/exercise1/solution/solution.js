/* eslint-disable no-unused-expressions, import/first */
`
📚 Exercise 1 - useCallback 📚

  We changed "handleRemove" to implement 
  "useCallback". As a result, the function that 
  "handleRemove" is equal to should only ever change 
  if "setPokemonTrivia" ever changes. 
  Because "setPokemonTrivia" came from a useState
  call, it should already be memoized and it
  should never recalculate itself. As a result,
  the "handleRemove" function should never
  regenerate.

  You may have also needed to specify "pokemonTrivia"
  as a dependency to "useCallback", but doing
  this puts you back in the same place as before.
  Because "pokemonTrivia" is stateful, when it
  changes, it would cause "handleRemove" to regenerate.

  The function returned from "useState" can also
  take a callback function, whose parameter is
  the current state represented by the function.
  With this parameter, we can determine the current
  value of state without introducing it as a
  dependency of "useCallback"

  This parameter is referred to as "statefulTrivia"
  in the "setPokemonTrivia", to represent the fact
  that it represents the current state of Pokemon
  Trivia. It's got the same values as "pokemonTrivia"!
`;

import { useCallback, useState } from 'react';
import pokemonDataSource from './../../../../data';

const List = () => {
  const [
    pokemonTrivia,
    setPokemonTrivia
  ] = useState(pokemonDataSource);
  const handleRemove = useCallback(
    (idToRemove) => {
      setPokemonTrivia((statefulTrivia) =>
        statefulTrivia.filter(
          (trivia) => trivia.id !== idToRemove
        )
      );
    },
    [setPokemonTrivia]
  );
  return (
    <ul>
      {pokemonTrivia.map((singleTrivia) => (
        <ListItem
          handleRemove={handleRemove}
          id={singleTrivia.id}
          key={singleTrivia.id}
          value={singleTrivia.value}
        />
      ))}
    </ul>
  );
};

`
 We use React.memo to prevent this component from
 re-rendering if its parent renders and all its
 props are same.

 At the beginning of the exercise, this would always
 return a new component because "handleRemove"
 always refers to a new function whenever it's
 rendered. When "useCallback" is implemented,
 all of its props should remain the same between renders.
`;
const ListItem = React.memo((props) => {
  console.warn(`Item ${props.id} re-rendered!`);
  const handleClick = (e) => {
    props.handleRemove(props.id);
  };
  return (
    <li
      className="Exercise1-listItem"
      onClick={handleClick}
    >
      #{props.id}: {props.value}
    </li>
  );
});

` ⛔ Exercise setup, ignore everything below this line`;
import React from 'react';
import './../index.css';

const Lesson1 = () => (
  <section>
    <p>
      Check out{' '}
      <code className="inlineCode">
        exercises/exercise1/index.js
      </code>{' '}
      to start Exercise 1!
    </p>
    <List />
  </section>
);

export default Lesson1;
