import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../../components/App';
import store from '../../store/index';

afterEach(cleanup);

it('should take a snapshot', () => {
  const { asFragment } = render(<Provider store={store}><App /></Provider>);
  expect(asFragment(<Provider store={store}><App /></Provider>)).toMatchSnapshot();
});

it('displays heading', () => {
  render(<Provider store={store}><App /></Provider>);
  expect(screen.getByText('Write the exact name')).toBeTruthy();
});
