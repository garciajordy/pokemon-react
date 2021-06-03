const PokemonReducer = (state = [], action) => {
  switch (action.type) {
    case 'Search':
      return [...state.filter((name) => name === action.payload)];
    default:
      return state;
  }
};

export default PokemonReducer;
