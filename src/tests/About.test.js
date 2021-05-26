import React from 'react';

import renderWithRouter from '../services/renderWithRouter';
import { About } from '../components';

describe('Testing the <About /> component', () => {
  it('an h2 tag with \'About Pokédex\'', () => {
    const { getByRole } = renderWithRouter(<About />);
    const h2 = getByRole('heading', { level: 2 });

    expect(h2).toHaveTextContent('About Pokédex');
  });

  it('2 texts with \'Pokémons\' on it', () => {
    const { getAllByText } = renderWithRouter(<About />);
    const paragraphs = getAllByText(/pokémons/i);

    expect(paragraphs.length).toBe(2);
  });

  it('an Pokédex img on it', () => {
    const { getByRole } = renderWithRouter(<About />);
    const img = getByRole('img');
    expect(img).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
