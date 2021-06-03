import { combineReducers } from 'redux';
import PokemonReducer from './pokemonReducer';
import searchReducer from './searchReducer';

const reducers = combineReducers({
  PokemonReducer,
  searchReducer,
});

export default reducers;
