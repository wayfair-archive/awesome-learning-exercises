/* eslint-disable no-unused-expressions, import/first, no-use-before-define */
`
📚 Exercise 2 - useMemo 📚

  Welcome to Exercise 2! In your browser, make
  sure "Exercise 2" is bold in the browser
  navigation before proceeding.

  What's the difference between "useCallback"
  and "useMemo"? Most simply,
  "useCallback" returns a _function_, and
  "useMemo" returns the _result of a function_

  const a = useCallback(() => {doSomething();});
  const b = useMemo(() => {return getSomething();});

  "useMemo" is best used
  to compute something expensive, intensive,
  or otherwise "heavy" to operate upon.
  Imagine a list with many elements, a
  complex data structure, or some
  other operation that acts upon data.

  Computing this value on _every render_
  would be a performance drag. And when it
  gets passed to child components, they
  have to re-render since one of their props
  changed.

  In this exercise, we're working with the same
  data set as last exercise. This time,
  we want to find and manipulate the descriptions of
  Pokemon, based on search terms, Pokedex Number,
  and Pokemon Name. However, every time the component
  re-renders, it also recalculates the values
  of the other two functions, even though their
  output will not change.

  🛠️ Implement "useMemo" to prevent the
  🛠️ various mathematical functions from
  🛠️ recalculating, unless "userProvidedNumber"
  🛠️ changes.

  💡 
`;

import { useMemo, useState } from 'react';

const PokemonSearch = () => {
  const [
    pokedexIDNumber,
    setPokedexIDNumber
  ] = useState(null);

  const [
    pokedexDescSearchTerm,
    setPokedexSearchTerm
  ] = useState(null);

  const [
    nameSearchTerm,
    setNameSearchTerm
  ] = useState(null);

  const pokemonById = findPokemonById(
    pokedexIDNumber
  );
  const pokemonByDescription = findPokemonByDescriptionSearch(
    pokedexDescSearchTerm
  );
  const pokemonByName = findPokemonByName(
    nameSearchTerm
  );

  return (
    <div className="Exercise2">
      <h3>Enter Pokemon Search Terms</h3>
      <form>
        <fieldset>
          <label htmlFor="numberSearch">
            Search by ID
          </label>
          <input
            type="number"
            name="numberSearch"
            id="numberSearch"
            onChange={(e) =>
              setPokedexIDNumber(e.target.value)
            }
          />
        </fieldset>

        <fieldset>
          <label htmlFor="pokedexSearch">
            Search by Description
          </label>
          <input
            type="text"
            name="pokedexSearch"
            id="pokedexSearch"
            onChange={(e) =>
              setPokedexSearchTerm(e.target.value)
            }
          />
        </fieldset>

        <fieldset>
          <label htmlFor="nameSearch">
            Search by Name
          </label>
          <input
            type="text"
            name="nameSearch"
            id="nameSearch"
            onChange={(e) =>
              setNameSearchTerm(e.target.value)
            }
          />
        </fieldset>
      </form>
      <h3>Results</h3>
      {pokemonById && (
        <Fragment>
          <h4>Pokemon By ID</h4>
          <ul>
            {pokemonById.map((pokemon) => (
              <PokemonListItem
                pokemon={pokemon}
              />
            ))}
          </ul>
        </Fragment>
      )}
      {pokemonByDescription && (
        <Fragment>
          <h4>Pokemon By Description</h4>
          <ul>
            {pokemonByDescription.map(
              (pokemon) => (
                <PokemonListItem
                  pokemon={pokemon}
                />
              )
            )}
          </ul>
        </Fragment>
      )}
      {pokemonByName && (
        <Fragment>
          <h4>Pokemon By Name</h4>
          <ul>
            {pokemonByName.map((pokemon) => (
              <PokemonListItem
                pokemon={pokemon}
              />
            ))}
          </ul>
        </Fragment>
      )}
    </div>
  );
};

` 
  ℹ️ You should not need code below this line,
  ℹ️ but taking a look here may help you understand
  ℹ️ what you need to do.
`;

function findPokemonById(id) {
  console.warn(`Finding Pokemon of ID ${id}`);
  if (!id) {
    return null;
  }
  return pokemonData.filter(
    (pokemon) => pokemon.id === id
  );
}

function findPokemonByDescriptionSearch(
  descriptionSearchTerm
) {
  console.warn(
    `Finding Pokemon whose description contains ${descriptionSearchTerm}`
  );
  if (!descriptionSearchTerm) {
    return null;
  }
  return pokemonData.filter(
    (pokemon) =>
      pokemon.value
        .toLowerCase()
        .indexOf(
          descriptionSearchTerm.toLowerCase()
        ) !== -1
  );
}

function findPokemonByName(nameSearchTerm) {
  console.warn(
    `Finding Pokemon whose name contains ${nameSearchTerm}`
  );
  if (!nameSearchTerm) {
    return null;
  }
  return pokemonData.filter((pokemon) => {
    const [name] = pokemon.value.split(' ');
    return (
      name
        .toLowerCase()
        .indexOf(nameSearchTerm.toLowerCase()) !==
      -1
    );
  });
}

const PokemonListItem = ({ pokemon }) => (
  <li key={pokemon.id}>
    #{pokemon.id}: {pokemon.value}
  </li>
);

` ⛔ Exercise setup, ignore everything below this line`;

import React, { Fragment } from 'react';
import pokemonData from './../../../data';
import './index.css';

const Exercise2 = () => (
  <section>
    <p>
      Check out{' '}
      <code className="inlineCode">
        exercises/exercise2/index.js
      </code>{' '}
      to start Exercise 2!
    </p>
    <p>
      Use the inputs below to search for Pokemon!
    </p>
    <PokemonSearch />
  </section>
);

export default Exercise2;
