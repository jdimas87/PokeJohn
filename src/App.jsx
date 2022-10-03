import axios from 'axios';
import { SWRConfig } from 'swr';

import Router from './routing/router';

const App = () => {
  const instance = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
    timeout: 2000,
  });

  return (
    <SWRConfig
      value={{
        fetcher: (url) => instance.get(url).then((res) => res),
        suspense: true,
      }}>
      <Router />
    </SWRConfig>
  );
};

export default App;
