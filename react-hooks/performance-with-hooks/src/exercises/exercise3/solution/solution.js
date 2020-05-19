/* eslint-disable no-unused-expressions, import/first, no-use-before-define */
`
📚 Exercise 3 - useRef 📚

  This can be done in one of a few ways:

  * Run "useEffect" and listen for activePokemonId
      and a ref. If activePokemonId _and_ a ref
      to the modal exist, focus on the link
      inside the modal.
  * Run "setTimeout" after clicking on a button
      to ensure that the modal exists before
      focusing on it (otherwise, the value of
      the useRef might still be null)

  🌟 Parts of the Bonus solution is marked with the star!
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

  const modalRef = useRef(null);
  // 🌟 Bonus: Make a ref for the Pokeball button
  const pokeballButtonRef = useRef(null);

  useEffect(() => {
    if (
      activePokemonID &&
      modalRef &&
      modalRef.current instanceof HTMLElement
    ) {
      modalRef.current.focus();
    }
  }, [activePokemonID, modalRef]);

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

  // Solution to the primary aspect of the exercise
  const handleButtonClick = (
    event,
    pokemonId
  ) => {
    setActivePokemonID(pokemonId);
    // 🌟 Bonus: Set the ref to be the original
    // 🌟 target of the button click
    pokeballButtonRef.current = event.target;
  };

  const handleModalDismiss = () => {
    setActivePokemonID(null);
    // 🌟 Bonus: Focus on the Pokeball Button Ref
    //    We never actually have to pass it to
    //    a DOM element in React, as the click
    //    event from the button click gives us
    //    all the information that we need
    if (
      pokeballButtonRef &&
      pokeballButtonRef.current instanceof
        HTMLElement
    ) {
      // The focused element may sometimes
      // be the Pokemon image, not the button
      // If this element is an image, get its
      // parent, and focus on _that_ instead
      if (
        pokeballButtonRef.current.tagName.toLowerCase() ===
        'img'
      ) {
        pokeballButtonRef.current.parentElement.focus();
      } else {
        pokeballButtonRef.current.focus();
      }
    }
  };

  return (
    <div className="Exercise3">
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
          ref={modalRef}
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
import pokemonData from './../../../../data';
import './../index.css';

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
