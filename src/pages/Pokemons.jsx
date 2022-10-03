import { useParams } from 'react-router-dom';
import useSwr from 'swr';

import PokemonsLayout from '../components/layouts/PokemonsLayout';

const Pokemons = () => {
  const params = useParams();

  const { data: pokemons } = useSwr('/pokemon');

  return <PokemonsLayout pokemons={pokemons.data.results} params={params} />;
};

export default Pokemons;
