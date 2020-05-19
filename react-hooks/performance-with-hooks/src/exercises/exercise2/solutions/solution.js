/* eslint-disable no-unused-expressions, import/first, no-use-before-define */
`
📚 Exercise 2 - useMemo 📚

  Unlike useCallback, useMemo does not have
  the ability to take parameters into the
  callback function that is passed to useMemo.
  As a result, we write our own callback function
  that takes the stateful values of the Pokedex
  ID, description, and name, and returns the
  output of the provided "searcher" functions.

  We can pass in the stateful values as members
  of the dependency array to "useState", because
  state will not change as a result of those
  function calls.
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

  const pokemonById = useMemo(() => {
    return findPokemonById(pokedexIDNumber);
  }, [pokedexIDNumber]);

  const pokemonByDescription = useMemo(() => {
    return findPokemonByDescriptionSearch(
      pokedexDescSearchTerm
    );
  }, [pokedexDescSearchTerm]);

  const pokemonByName = useMemo(() => {
    return findPokemonByName(nameSearchTerm);
  }, [nameSearchTerm]);

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
