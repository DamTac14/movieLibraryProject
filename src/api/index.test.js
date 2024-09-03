import { getMovies, getMovieById, addMovie, updateMovie } from './index'; 
import {expect, test} from '@jest/globals';

test('should fetch movies correctly', async () => {
  const movies = await getMovies();

  expect(movies).toEqual([
    {
      id: "1",
      title: "Inception",
      director: "Christopher Nolan",
      year: "2010",
      genre: "Science-Fiction",
      summary: "Dom Cobb est un voleur expérimenté dans l'art périlleux de l'extraction : sa spécialité consiste à s'approprier les secrets les plus précieux d'un individu, enfouis au plus profond de son subconscient, pendant qu'il rêve, lorsque son esprit est le plus vulnérable.",
      posterUrl: "https://fr.web.img6.acsta.net/medias/nmedia/18/72/34/14/19476654.jpg"
    },
    {
      "id": "3",
      "title": "The Dark Knight",
      "director": "Christopher Nolan",
      "year": "2008",
      "genre": "Action",
      "summary": "Batman aborde une phase décisive de sa guerre contre le crime. Avec l'aide du lieutenant de police Jim Gordon et du procureur Harvey Dent, Batman s'efforce de démanteler les organisations criminelles qui pullulent à Gotham City.",
      "posterUrl": "https://fr.web.img3.acsta.net/medias/nmedia/18/65/66/55/19033354.jpg"
    },
    {
      "id": "4",
      "title": "The Matrix",
      "director": "Les Wachowskis",
      "year": "1999",
      "genre": "Science-Fiction",
      "summary": "Neo, un jeune hacker, découvre que le monde dans lequel il vit n'est qu'une illusion. Il rejoint un groupe de résistants pour se libérer de la Matrice, une réalité virtuelle contrôlée par des machines intelligentes.",
      "posterUrl": "https://fr.web.img6.acsta.net/medias/04/33/19/043319_af.jpg"
    },
    {
      "id": "5",
      "title": "Interstellar",
      "director": "Christopher Nolan",
      "year": "2014",
      "genre": "Science-Fiction",
      "summary": "Dans un futur proche, la Terre est devenue hostile à la vie humaine. Un groupe d'astronautes entreprend une mission à travers un trou de ver pour trouver un nouveau foyer à l'humanité.",
      "posterUrl": "https://fr.web.img6.acsta.net/medias/nmedia/18/90/32/60/20428156.jpg"
    },
    {
      "id": "6",
      "title": "Pulp Fiction",
      "director": "Quentin Tarantino",
      "year": "1994",
      "genre": "Crime",
      "summary": "L'odyssée sanglante et burlesque de petits malfrats à Los Angeles. Jules et Vincent, deux tueurs à gages au service d'un puissant truand, suivent les ordres de leur patron entre règlements de comptes, trahisons, et tentatives de redressement.",
      "posterUrl": "https://fr.web.img6.acsta.net/medias/nmedia/18/36/04/37/18846278.jpg"
    }
  ]);
});




test('should fetch movie by ID correctly', async () => {
  const movie = await getMovieById(1); 
  
  expect(movie).toEqual({
    id: "1",
    title: "Inception",
    director: "Christopher Nolan",
    year: "2010",
    genre: "Science-Fiction",
    summary: "Dom Cobb est un voleur expérimenté dans l'art périlleux de l'extraction : sa spécialité consiste à s'approprier les secrets les plus précieux d'un individu, enfouis au plus profond de son subconscient, pendant qu'il rêve, lorsque son esprit est le plus vulnérable.",
    posterUrl: "https://fr.web.img6.acsta.net/medias/nmedia/18/72/34/14/19476654.jpg"
  });
});


test('should add a movie correctly', async () => {
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


test('should update a movie correctly', async () => {
  const updatedMovie = {
    title: "Inception (Updated)",
    director: "Christopher Nolan",
    year: "2010",
    genre: "Science-Fiction",
    summary: "Dom Cobb est un voleur dans l'art de l'extraction.",
    posterUrl: "https://example.com/inception-updated.jpg"
  };


  
  const updated = await updateMovie(1, updatedMovie);
  
  expect(updated).toMatchObject(updatedMovie); 

  const fetchedUpdatedMovie = await getMovieById(1);
  expect(fetchedUpdatedMovie).toMatchObject(updatedMovie);
});
