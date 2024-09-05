import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { expect, jest } from '@jest/globals';
import { MemoryRouter } from 'react-router-dom';
import MovieForm from './MovieForm';

describe('MovieForm Component', () => {
  it('should render the form correctly', () => {
    render(<MemoryRouter><MovieForm /></MemoryRouter>);
    expect(screen.getByPlaceholderText(/Titre/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Direction/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Année de sortie/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Genre/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Résumé/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/URL de la couverture du film/i)).toBeInTheDocument();
    expect(screen.getByText(/Ajouter ce film/i)).toBeInTheDocument();
  });

  it('should handle form submission', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
      })
    );

    render(<MemoryRouter><MovieForm /></MemoryRouter>);

    fireEvent.change(screen.getByPlaceholderText(/Titre/i), { target: { value: 'New Movie' } });
    fireEvent.change(screen.getByPlaceholderText(/Direction/i), { target: { value: 'Director' } });
    fireEvent.change(screen.getByPlaceholderText(/Année de sortie/i), { target: { value: '2024' } });
    fireEvent.change(screen.getByPlaceholderText(/Genre/i), { target: { value: 'Sci-Fi' } });
    fireEvent.change(screen.getByPlaceholderText(/Résumé/i), { target: { value: 'A great movie' } });
    fireEvent.change(screen.getByPlaceholderText(/URL de la couverture du film/i), { target: { value: 'https://example.com/new-movie.jpg' } });

    fireEvent.click(screen.getByText(/Ajouter ce film/i));

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith('http://localhost:3000/api/movies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'New Movie',
          director: 'Director',
          year: '2024',
          genre: 'Sci-Fi',
          summary: 'A great movie',
          posterUrl: 'https://example.com/new-movie.jpg',
        }),
      });
    });
  });
});
