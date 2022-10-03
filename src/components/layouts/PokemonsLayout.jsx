import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import toUpperCaseFirst from '../../helpers/toUpperCaseFirst';
import isObjectEmpty from '../../helpers/isObjectEmpty';
import getPokemonId from '../../helpers/getPokemonId';

import PokemonToast from '../UI/PokemonToast';

const PokemonsLayout = ({ pokemons, params }) => {
  const pokemonsList = pokemons.map((pokemon, index) => (
    <PokemonToast
      key={index}
      name={toUpperCaseFirst(pokemon.name)}
      id={getPokemonId(pokemon.url)}
    />
  ));

  return (
    <Fragment>
      {isObjectEmpty(params) ? pokemonsList : ''}
      <Outlet />
    </Fragment>
  );
};

export default PokemonsLayout;
