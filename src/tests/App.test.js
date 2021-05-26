import React from 'react';
import App from '../App';
import renderWithRouter from '../services/renderWithRouter';

describe('Testing the <App /> component', () => {
  it('a heading with the text \'Pokédex\' is rendered', () => {
    const { getByText } = renderWithRouter(<App />);
    const pokemonHeading = getByText(/pokédex/i);

    expect(pokemonHeading).toBeInTheDocument();
  });

  it('the navbar is rendered with \'Home\', \'About\' and \'Favorite Pokémons\'', () => {
    const { getByText } = renderWithRouter(<App />);
    const home = getByText(/home/i);
    const about = getByText(/about/i);
    const favoritePokemons = getByText('Favorite Pokémons');

    expect(home).toBeInTheDocument();
    expect(about).toBeInTheDocument();
    expect(favoritePokemons).toBeInTheDocument();
  });
});
