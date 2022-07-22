import { useState, useEffect } from 'react';
import useFetchData from '../hooks/useFetchData';
import toUpperCaseFirst from '../helpers/toUpperCaseFirst';
import getPokemonId from '../helpers/getPokemonId';
import PokemonToast from '../components/UI/pokemonToast';
import Loader from '../components/UI/loader';

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const { data, error } = useFetchData('https://pokeapi.co/api/v2/pokemon');

  useEffect(() => {
    if (data) {
      setPokemons(data.results);
      setIsLoading(false);
    }

    if (error) {
      setHasError(true);
    }
  }, [data, error]);

  if (isLoading) {
    return <Loader />;
  } else if (hasError) {
    return <h3>Oops. Something Happend.</h3>;
  } else {
    return pokemons.map((pokemon, index) => (
      <PokemonToast
        key={index}
        name={toUpperCaseFirst(pokemon.name)}
        id={getPokemonId(pokemon.url)}
      />
    ));
  }
};

export default Pokemons;
