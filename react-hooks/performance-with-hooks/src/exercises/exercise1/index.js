/* eslint-disable no-unused-expressions, import/first, no-use-before-define */
`
📚 Exercise 1 - useCallback 📚

  Welcome to Exercise 1! In your browser, make
  sure "Exercise 1" is bold in the browser
  navigation before proceeding.

  We've got a list of items that you can add
  and remove from. Clicking on the "X" icon
  will remove an item from the list, while
  clicking the "Add Item" at the bottom will
  add a new item to the bottom of the list.

  If you open the CodeSandbox Console (at
  the bottom of the page near the middle),
  you will see that every time a list item
  re-renders, it logs a warning to the console.
  These components shouldn't _have_ to re-render
  every time their parent renders...let's fix it!

  🛠️ Implement "useCallback" to prevent the
  🛠️ "handleChange" function from recreating
  🛠️ on every render of the ListItem component.

  💡 If you're unfamliar with "useState",
  💡 check out Lesson 1 on useState and useEffect!
  💡 https://wayfair.github.io/awesome-learning/courses/React-Hooks/intro-to-react-hooks
  💡 You may need to change how state is being changed
  💡 to get this to work!
`;

import { useCallback, useState } from 'react';
import pokemonDataSource from './../../../data';

const List = () => {
  const [
    pokemonTrivia,
    setPokemonTrivia
  ] = useState(pokemonDataSource);
  const handleRemove = (idToRemove) => {
    setPokemonTrivia(() =>
      pokemonTrivia.filter(
        (trivia) => trivia.id !== idToRemove
      )
    );
  };
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
  ℹ️ You should not need to modify this component,
  ℹ️ but taking a look here may help you understand
  ℹ️ what you need to do to prevent it from re-rendering!
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
import './index.css';

const Lesson1 = () => (
  <section>
    <p>
      Check out{' '}
      <code className="inlineCode">
        exercises/exercise1/index.js
      </code>{' '}
      to start Exercise 1!
    </p>
    <p>
      Click on an item in the list to remove it!
    </p>
    <List />
  </section>
);

export default Lesson1;
