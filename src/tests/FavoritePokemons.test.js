import React from 'react';

import renderWithRouter from '../services/renderWithRouter';
import { FavoritePokemons } from '../components';

describe('Testing the <FavoritePokemons /> component', () => {
  it('', () => {
    const { getByText } = renderWithRouter(<FavoritePokemons />);
    const noPokes = getByText('No favorite pokemon found');

    expect(noPokes).toBeInTheDocument();
  });
});
