import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import PokemonList from '../../components/PokemonList';
import store from '../../store/index';

afterEach(cleanup);

it('should take a snapshot', () => {
  const { asFragment } = render(<Provider store={store}><PokemonList /></Provider>);
  expect(asFragment(<Provider store={store}><PokemonList /></Provider>)).toMatchSnapshot();
});

it('displays heading', () => {
  render(<Provider store={store}><PokemonList /></Provider>);
  expect(screen.getByText('Write the exact name')).toBeTruthy();
});
