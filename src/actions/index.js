export const searchPokemon = (name) => ({
  type: 'Search',
  payload: name,
});

export const addPokemons = (pokemons) => ({
  type: 'Add',
  payload: pokemons,
});

export const singlePokemon = (pokemon) => ({
  type: 'Pokemon',
  payload: pokemon,
});
