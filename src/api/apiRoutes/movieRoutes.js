// // src/routes/movieRoutes.js
// const express = require('express');
// const router = express.Router();
// const Movie = require('../models/movieModel');

// router.get('/movies', async (req, res) => {
//   try {
//     const movies = await Movie.find();
//     res.json(movies);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// router.get('/movies/:id', async (req, res) => {
//   try {
//     const movie = await Movie.findById(req.params.id);
//     if (!movie) return res.status(404).json({ message: 'Movie not found' });
//     res.json(movie);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// router.post('/movies', async (req, res) => {
//   const movie = new Movie(req.body);
//   try {
//     const newMovie = await movie.save();
//     res.status(201).json(newMovie);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// router.put('/movies/:id', async (req, res) => {
//   try {
//     const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updatedMovie) return res.status(404).json({ message: 'Movie not found' });
//     res.json(updatedMovie);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// router.delete('/movies/:id', async (req, res) => {
//   try {
//     const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
//     if (!deletedMovie) return res.status(404).json({ message: 'Movie not found' });
//     res.json({ message: 'Movie deleted' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;