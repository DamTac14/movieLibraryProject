import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import '@testing-library/jest-dom';
import { expect, jest } from '@jest/globals';
import MovieDetails from './MovieDetails';

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({
      id: '1',
      title: 'Inception',
      year: '2010',
      posterUrl: 'https://example.com/inception.jpg',
    }),
  })
);

describe('MovieDetails Component', () => {
  it('should fetch and display movie details', async () => {
    render(
      <MemoryRouter initialEntries={['/movies/1']}>
        <Routes>
          <Route path="/movies/:movieId" element={<MovieDetails />} />
        </Routes>
      </MemoryRouter>
    );

    expect(fetch).toHaveBeenCalledWith('http://localhost:3000/api/movies/1');

    await waitFor(() => {
      expect(screen.queryByText(/The Matrix/i)).not.toBeInTheDocument();
      expect(screen.getByText(/Inception/i)).toBeInTheDocument();
      expect(screen.getByText(/2010/i)).toBeInTheDocument();
      expect(screen.getByAltText(/Inception/i)).toBeInTheDocument();
    });
  });
});
