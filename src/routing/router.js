import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';

const Fallback = loadable(() =>
  import('../components/UI/ErrorBoudaryFallback')
);
const Intro = loadable(() => import('../pages/Intro'));
const Layout = loadable(() => import('../components/layouts/Layout'));
const Loader = loadable(() => import('../components/UI/Loader'));
const PageNotFound = loadable(() => import('../pages/PageNotFound'));
const Pokemon = loadable(() => import('../pages/Pokemon'));
const Pokemons = loadable(() => import('../pages/Pokemons'));

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path='/' element={<Intro />} />
          <Route
            path='/pokemons'
            element={
              <ErrorBoundary FallbackComponent={Fallback}>
                <Suspense fallback={<Loader />}>
                  <Pokemons />
                </Suspense>
              </ErrorBoundary>
            }>
            <Route
              path=':pokemonId'
              element={
                <ErrorBoundary FallbackComponent={Fallback}>
                  <Suspense fallback={<Loader />}>
                    <Pokemon />
                  </Suspense>
                </ErrorBoundary>
              }
            />
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
