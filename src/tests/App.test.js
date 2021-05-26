import React from 'react';
import userEvent from '@testing-library/user-event';

import renderWithRouter from '../services/renderWithRouter';
import App from '../App';

describe('Testing the <App /> component', () => {
  it('a heading with the text \'Pokédex\' is rendered', () => {
    const { getByText } = renderWithRouter(<App />);
    const pokemonHeading = getByText(/pokédex/i);

    expect(pokemonHeading).toBeInTheDocument();
  });

  it('the navbar is rendered with \'Home\', \'About\' and \'Favorite Pokémons\'', () => {
    const { getByText } = renderWithRouter(<App />);
    const home = getByText('Home');
    const about = getByText('About');
    const favoritePokemons = getByText('Favorite Pokémons');

    expect(home).toBeInTheDocument();
    expect(about).toBeInTheDocument();
    expect(favoritePokemons).toBeInTheDocument();
  });

  it('the page is redirected to the correct routes', () => {
    const { getByText, history } = renderWithRouter(<App />);
    const home = getByText('Home');
    const about = getByText('About');
    const favoritePokemons = getByText('Favorite Pokémons');

    userEvent.click(home);
    expect(history.location.pathname).toBe('/');

    userEvent.click(about);
    expect(history.location.pathname).toBe('/about');

    userEvent.click(favoritePokemons);
    expect(history.location.pathname).toBe('/favorites');
  });
});
