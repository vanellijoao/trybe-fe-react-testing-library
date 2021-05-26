import React from 'react';

import renderWithRouter from '../services/renderWithRouter';
import { NotFound } from '../components';

describe('Testing the <NotFound /> component', () => {
  it('', () => {
    const { getByText } = renderWithRouter(<NotFound />);
    const notFound = getByText('Page requested not found');

    expect(notFound).toBeInTheDocument();
  });

  it('an img on it', () => {
    const { getAllByRole } = renderWithRouter(<NotFound />);
    const img = getAllByRole('img');
    expect(img[1]).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
