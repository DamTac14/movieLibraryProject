import express from 'express';
const router = express.Router();
import Movie from '../models/movieModel.js';





/**
 * @swagger
 * /movies:
 *   get:
 *     summary: Récupérer la liste des films
 *     tags: [Movies]
 *     responses:
 *       200:
 *         description: Liste des films récupérée avec succès
 */
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});





/**
 * @swagger
 * /movies/{id}:
 *   get:
 *     summary: Récupérer un film par ID
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID du film
 *     responses:
 *       200:
 *         description: Détails du film
 *       404:
 *         description: Le film n'a pas été trouvé
 */
router.get('/:id', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ message: 'Le film n\'a pas été trouvé' });
    res.json(movie);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});




/**
 * @swagger
 * /movies:
 *   post:
 *     summary: Ajouter un nouveau film
 *     tags: [Movies]
 *     responses:
 *       201:
 *         description: Film ajouté avec succès
 *       400:
 *         description: Erreur lors de l'ajout du film
 */
router.post('/', async (req, res) => {
  const movie = new Movie(req.body);
  try {
    const newMovie = await movie.save();
    res.status(201).json(newMovie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});






/**
 * @swagger
 * /movies/{id}:
 *   put:
 *     summary: Mettre à jour un film
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         description: ID du film
 *     responses:
 *       200:
 *         description: Film mis à jour
 *       404:
 *         description: Film non trouvé
 *       400:
 *         description: Erreur de mise à jour
 */
router.put('/:id', async (req, res) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedMovie) return res.status(404).json({ message: 'Le film n\'a pas été trouvé' });
    res.json(updatedMovie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});




/**
 * @swagger
 * /movies/{id}:
 *   delete:
 *     summary: Supprimer un film
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID du film
 *     responses:
 *       200:
 *         description: Film supprimé
 *       404:
 *         description: Film non trouvé
 */
router.delete('/:id', async (req, res) => {
  try {
    const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
    if (!deletedMovie) return res.status(404).json({ message: 'Le film n\'a pas été trouvé' });
    res.json({ message: 'Film supprimé' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


export default router;
