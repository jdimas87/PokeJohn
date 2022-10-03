import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import useFetchData from '../hooks/useFetchData';

import PokemonsLayout from '../components/layouts/PokemonsLayout';
import Loader from '../components/UI/Loader';

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const params = useParams();

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
  }

  if (hasError) {
    return <h3>Oops. Something Happend.</h3>;
  }

  return <PokemonsLayout pokemons={pokemons} params={params} />;
};

export default Pokemons;
