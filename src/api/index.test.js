import { getMovies, getMovieById, addMovie, updateMovie } from './index'; 
import { expect, test } from '@jest/globals';

test('fetch des films effectué correctement', async () => {
  const movies = await getMovies();
  
  expect(movies.length).toBeGreaterThanOrEqual(3);

  expect(movies).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        id: "1",
        title: "Inception (Updated)",
        director: "Christopher Nolan",
        year: "2010",
        genre: "Science-Fiction",
        summary: "Dom Cobb est un voleur dans l'art de l'extraction.",
        posterUrl: "https://example.com/inception-updated.jpg"
      }),
      expect.objectContaining({
        id: "3",
        title: "The Dark Knight"
      }),
      expect.objectContaining({
        id: "7",
        title: "Dune"
      })
    ])
  );
});

test('film trouvé correctement', async () => {
  const movie = await getMovieById("1");

  expect(movie).toEqual({
    id: "1",
    title: "Inception (Updated)",
    director: "Christopher Nolan",
    year: "2010",
    genre: "Science-Fiction",
    summary: "Dom Cobb est un voleur dans l'art de l'extraction.",
    posterUrl: "https://example.com/inception-updated.jpg"
  });
});

test('film ajouté correctement', async () => {
  const newMovie = {
    title: "Dune",
    director: "Denis Villeneuve",
    year: "2021",
    genre: "Science-Fiction",
    summary: "L'histoire épique de Paul Atreides, héritier d'une noble famille, qui se retrouve au cœur d'un conflit sur la planète désertique Arrakis.",
    posterUrl: "https://example.com/dune.jpg"
  };

  const addedMovie = await addMovie(newMovie);
  expect(addedMovie).toMatchObject(newMovie);

  const fetchedMovie = await getMovieById(addedMovie.id);
  expect(fetchedMovie).toMatchObject(newMovie);
});

test('update effectué correctement', async () => {
  const updatedMovie = {
    title: "Inception (Updated)",
    director: "Christopher Nolan",
    year: "2010",
    genre: "Science-Fiction",
    summary: "Dom Cobb est un voleur dans l'art de l'extraction.",
    posterUrl: "https://example.com/inception-updated.jpg"
  };

  const updated = await updateMovie("1", updatedMovie);
  expect(updated).toMatchObject(updatedMovie);

  const fetchedUpdatedMovie = await getMovieById("1");
  expect(fetchedUpdatedMovie).toMatchObject(updatedMovie);
});
