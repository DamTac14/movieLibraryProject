import React from 'react'; 
import { render, screen, waitFor } from '@testing-library/react';
import { expect, test, jest } from '@jest/globals';
import MovieList from './MovieList';
import * as api from '../api';

jest.mock('../api', () => ({
  getMovies: jest.fn(),
}));

test('renders a list of movies', async () => {
  const movies = [
    {
      id: '1',
      title: 'Inception (Updated)',
      year: '2010',
      posterUrl: 'https://example.com/inception-updated.jpg',
    },
    {
      id: '3',
      title: 'The Dark Knight',
      year: '2008',
      posterUrl: 'https://fr.web.img3.acsta.net/medias/nmedia/18/65/66/55/19033354.jpg',
    },
    {
      id: '4',
      title: 'The Matrix',
      year: '1999',
      posterUrl: 'https://fr.web.img6.acsta.net/medias/04/33/19/043319_af.jpg',
    },
    {
      id: '5',
      title: 'Interstellar',
      year: '2014',
      posterUrl: 'https://fr.web.img6.acsta.net/medias/nmedia/18/90/32/60/20428156.jpg',
    },
  ];

  api.getMovies.mockResolvedValue(movies);

  render(<MovieList />);

  await waitFor(() => {
    expect(screen.getByText('Inception (Updated)')).toBeInTheDocument();
    expect(screen.getByText('The Dark Knight')).toBeInTheDocument();
    expect(screen.getByText('The Matrix')).toBeInTheDocument();
    expect(screen.getByText('Interstellar')).toBeInTheDocument();
    expect(screen.queryByText('Dune')).not.toBeInTheDocument(); 
  });
});
