import { useParams } from 'react-router-dom';
import useSwr from 'swr';

import PokemonsLayout from '../components/layouts/PokemonsLayout';

const Pokemons = () => {
  const params = useParams();

  const { data: pokemons } = useSwr('/pokemon?offset=0&limit=20');

  return <PokemonsLayout pokemons={pokemons.data.results} params={params} />;
};

export default Pokemons;
