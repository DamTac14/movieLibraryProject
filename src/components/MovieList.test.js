import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { expect, jest } from '@jest/globals';
import MovieList from './MovieList';

global.fetch = jest.fn(() => 
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([
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
    ]),
  })
);

describe('Movie List Component', () => {
  beforeEach(() => {
    fetch.mockClear();
  });







  it('should call the API with GET method', async () => {
    render(
      <MemoryRouter>
        <MovieList />
      </MemoryRouter>
    );
    expect(fetch).toHaveBeenCalledWith('http://localhost:3000/api/movies');
  });








  it('should present Inception movie', async () => {
    render(
      <MemoryRouter>
        <MovieList />
      </MemoryRouter>
    );
    expect(fetch).toHaveBeenCalledWith('http://localhost:3000/api/movies');
    await waitFor(() => {
      expect(screen.getByText(/Inception/i)).toBeInTheDocument();
    });
  });









  it('Should have a functioning search bar', async () => {
    render(
      <MemoryRouter>
        <MovieList />
      </MemoryRouter>
    );
    expect(fetch).toHaveBeenCalledWith('http://localhost:3000/api/movies');
    await waitFor(() => {
      expect(screen.getByText(/Inception/i)).toBeInTheDocument();
    });

    fireEvent.change(screen.getByPlaceholderText('Rechercher un film...'), { target: { value: 'The Matrix' } });
    
    await waitFor(() => {
      expect(screen.queryByText(/Matrix/i)).toBeInTheDocument();
      expect(screen.queryByText(/Inception/i)).not.toBeInTheDocument();
    });
  });






});
