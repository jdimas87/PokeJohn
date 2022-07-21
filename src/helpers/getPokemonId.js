const getPokemonId = (url) => {
  const parts = url.split('/');

  return parts[parts.length - 2];
};

export default getPokemonId;
