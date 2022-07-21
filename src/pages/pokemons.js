import { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import useFetchData from '../hooks/useFetchData';
import toUpperCaseFirst from '../helpers/toUpperCaseFirst';
import getPokemonId from '../helpers/getPokemonId';
import PokemonToast from '../components/UI/pokemonToast';
import styles from '../assets/css/pokemons.module.css';

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
    return (
      <div className={styles.spinner_wrapper}>
        <Spinner
          animation='grow'
          variant='danger'
          style={{ width: '10rem', height: '10rem' }}
        />
      </div>
    );
  } else if (hasError) {
    return <h3>Oops. Something Happend.</h3>;
  } else {
    return pokemons.map((pokemon, index) => (
      <PokemonToast
        key={index}
        name={toUpperCaseFirst(pokemon.name)}
        url={getPokemonId(pokemon.url)}
      />
    ));
  }
};

export default Pokemons;
