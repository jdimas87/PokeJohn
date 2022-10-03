import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from '../components/layouts/Layout';
import Intro from '../pages/Intro';
import Pokemons from '../pages/Pokemons';
import Pokemon from '../pages/Pokemon';
import PageNotFound from '../pages/PageNotFound';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path='/' element={<Intro />} />
          <Route path='/pokemons' element={<Pokemons />}>
            <Route path=':pokemonId' element={<Pokemon />} />
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
