/* eslint-disable no-unused-expressions, import/first, no-use-before-define */
`
📚 Exercise 3 - useRef 📚

  Welcome to Exercise 3! In your browser, make
  sure "Exercise 3" is bold in the browser
  navigation before proceeding.

  You might be wondering what "useRef"
  is doing in a lesson on performance.
  "useRef" is similar to properties on a
  class: they are variables on a class
  that do not change between renders unless
  you act upon them.

  They're often used to store references
  to HTML elements, but they can be used to
  store _any_ value that you want to be preserved
  between renders.

  If we used "createRef", then the variable
  containing the reference would be updated
  on every render of the component. With "useRef",
  that only happens on the initial render.

  https://stackoverflow.com/a/54620836/2246272

  Our Pokemon party is almost ready to go! Before
  we head off to battle, we'd like to inspect
  the members of our party. Click on a Pokeball
  to see who's inside!

  However, what if you're using your keyboard
  to examine your party? You'll notice that 
  when the modal appears, the content underneath
  the modal remains focused. This is a common
  accessibility use case, and is also helpful
  for times when people aren't able to use their
  mouse. With useRef, we can manually focus 
  elements _in response to an event._

  🛠️ Implement "useRef" so that clicking on
  🛠️ a Pokeball focuses on the contents of the
  🛠️ modal.

  💡 We've already set up useState to track the
  💡 Pokedex ID number for the "active" Pokemon.
  💡 The modal will already appear, unfocused,
  💡 when a Pokeball is clicked.

  🌟 BONUS: When the modal is dismissed, it
  🌟 should re-focus on the Pokeball that was
  🌟 last clicked before the modal was opened.
`;

import {
  useEffect,
  useRef,
  useState
} from 'react';

const PokemonParty = () => {
  // The members of our party
  const pokemon1ID = 5;
  const pokemon2ID = 90;
  const pokemon3ID = 149;

  // Save state of the current active Pokemon
  const [
    activePokemonID,
    setActivePokemonID
  ] = useState(null);

  // Get information about our Pokemon
  let activePokemonTrivia, activePokemonName;
  if (activePokemonID) {
    const activePokemonData =
      pokemonData[activePokemonID];
    activePokemonName = activePokemonData.value.split(
      ' '
    )[0];
    activePokemonTrivia = activePokemonData.value;
  }

  const handleButtonClick = (
    event,
    pokemonId
  ) => {
    setActivePokemonID(pokemonId);
  };

  const handleModalDismiss = () => {
    setActivePokemonID(null);
  };

  return (
    <div>
      <h2>Party Members</h2>
      <div className="Exercise3-pokeballRow">
        <button
          onClick={(event) =>
            handleButtonClick(event, pokemon1ID)
          }
        >
          <img
            alt="Party member 1. Who could it be?"
            src="https://cdn.bulbagarden.net/upload/d/dc/GO_Pok%C3%A9_Ball.png"
          />
        </button>

        <button
          onClick={(event) =>
            handleButtonClick(event, pokemon2ID)
          }
        >
          <img
            alt="Party member 2. Who could it be?"
            src="https://cdn.bulbagarden.net/upload/d/dc/GO_Pok%C3%A9_Ball.png"
          />
        </button>

        <button
          onClick={(event) =>
            handleButtonClick(event, pokemon3ID)
          }
        >
          <img
            alt="Party member 3. Who could it be?"
            src="https://cdn.bulbagarden.net/upload/d/dc/GO_Pok%C3%A9_Ball.png"
          />
        </button>
      </div>
      {activePokemonName && (
        <Modal
          activePokemonName={activePokemonName}
          activePokemonID={activePokemonID}
          activePokemonTrivia={
            activePokemonTrivia
          }
          onDismiss={handleModalDismiss}
        />
      )}
    </div>
  );
};

`
  ⏩ forwardRef is necessary to "forward" a
  ⏩ provided ref to somewhere within this
  ⏩ React component. Components themselves
  ⏩ can't be given refs; instead, refs can
  ⏩ only be applied on HTML elements.
  ⏩ This is often used in component/pattern
  ⏩ libraries to allow consumers to pass a ref
  ⏩ to a specific element within a component.
`;
const Modal = forwardRef((props, ref) => (
  <div className="Exercise3-modal">
    <div className="Exercise3-activePokemon">
      <h1>Active Pokemon:</h1>
      <img
        alt={`The Pokemon ${
          props.activePokemonName
        }`}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.activePokemonID +
          1}.png`}
      />
      <p>{props.activePokemonTrivia}</p>
      <p>
        <a
          href={`https://bulbapedia.bulbagarden.net/wiki/${
            props.activePokemonName
          }`}
          ref={ref}
          target="_blank"
          rel="noopener noreferrer"
        >
          Bulbagarden Wiki Link
        </a>
      </p>
      <button onClick={props.onDismiss}>
        Dismiss
      </button>
    </div>
  </div>
));

` ⛔ Exercise setup, ignore everything below this line`;
import React, { forwardRef } from 'react';
import pokemonData from './../../../data';
import './index.css';

const Exercise3 = () => {
  return (
    <section>
      <p>
        Check out{' '}
        <code className="inlineCode">
          exercises/exercise3/index.js
        </code>{' '}
        to start Exercise 3!
      </p>
      <p>
        Click on a Pokeball to view the Pokemon
        inside!
      </p>
      <PokemonParty />
    </section>
  );
};

export default Exercise3;
