import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import Pokemon from '../../components/Pokemon';

afterEach(cleanup);

it('displays heading', () => {
  render(<Pokemon
    key="hello"
    name="hello"
    url=""

  />);
  expect(screen.getByText('hello')).toBeTruthy();
});
