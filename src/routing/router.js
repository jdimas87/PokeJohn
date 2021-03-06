import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from '../components/layouts/layout';
import Intro from '../pages/intro';
import Pokemons from '../pages/pokemons';
import Pokemon from '../pages/pokemon';
import PageNotFound from '../pages/pageNotFound';

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
