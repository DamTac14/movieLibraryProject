import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  director: { type: String, required: true },
  year: { type: Number, required: true },
  genre: { type: String, required: true },
  summary: { type: String },
  posterUrl: { type: String },
});

const Movie = mongoose.model('Movie', movieSchema, 'MoviesLibrary');

export default Movie;
