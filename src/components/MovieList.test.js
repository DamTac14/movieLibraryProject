import { render, screen, waitFor } from '@testing-library/react';
import { expect, test, jest } from '@jest/globals';
import MovieList from './MovieList';
import * as api from '../api'; 

jest.mock('../api', () => ({
  getMovies: jest.fn(),
}));

test('renders a list of movies', async () => {
  const movies = [
    { id: '1', title: 'Inception', year: 2010, posterUrl: 'inception.jpg' },
    { id: '2', title: 'The Matrix', year: 1999, posterUrl: 'matrix.jpg' },
  ];
  api.getMovies.mockResolvedValue(movies);

  render(<MovieList />);

  await waitFor(() => {
    expect(screen.getByText('Inception')).toBeInTheDocument();
    expect(screen.getByText('The Matrix')).toBeInTheDocument();
  });
});
