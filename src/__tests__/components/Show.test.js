import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Show from '../../components/Show';
import store from '../../store/index';

afterEach(cleanup);

it('should take a snapshot', () => {
  const { asFragment } = render(<Provider store={store}><Show /></Provider>);
  expect(asFragment(<Provider store={store}><Show /></Provider>)).toMatchSnapshot();
});

it('displays heading', () => {
  render(<Provider store={store}><Show /></Provider>);
  expect(screen.getByText('Back')).toBeTruthy();
});
