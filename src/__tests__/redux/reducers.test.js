import { cleanup } from '@testing-library/react';
import store from '../../store/index';

afterEach(cleanup);

it('should return initial state', () => {
  expect(store.getState().PokemonReducer).toStrictEqual([]);
});

it('should return initial state', () => {
  expect(store.getState().searchReducer).toStrictEqual({});
});
