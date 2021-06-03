import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import Pagination from '../../components/Pagination';

afterEach(cleanup);
function test() {
  return 5 + 6;
}
it('should take a snapshot', () => {
  const { asFragment } = render(<Pagination
    goToNextPage={test}
    goToPrevPage={test}
  />);
  expect(asFragment(<Pagination
    goToNextPage={test}
    goToPrevPage={test}
  />)).toMatchSnapshot();
});

it('displays heading', () => {
  render(<Pagination
    goToNextPage={test}
    goToPrevPage={test}
  />);
  expect(screen.getByText('Next')).toBeTruthy();
});
