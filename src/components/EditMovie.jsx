import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMovieById, updateMovie } from '../api';

const EditMovie = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({
    title: '',
    director: '',
    year: '',
    genre: '',
    summary: '',
    posterUrl: ''
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await getMovieById(movieId);
        setMovie(data);
        setError(null); 
      } catch (error) {
        console.error('Error fetching movie:', error);
        setError('Erreur de chargement du film. Veuillez réessayer.');
      }
    };
    fetchMovie();
  }, [movieId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie(prevMovie => ({ ...prevMovie, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateMovie(movieId, movie);
      setError(null); 
      navigate(`/movies/${movieId}`);
    } catch (error) {
      console.error('Error updating movie:', error);
      setError('Erreur lors de la mise à jour du film. Veuillez réessayer.');
    }
  };

  if (error) {
    return (
      <div className="error-message">
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Recharger la page</button>
      </div>
    );
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
    <h1>Editer {movie.title}</h1>
      <input type="text" name="title" value={movie.title} onChange={handleChange} placeholder="Titre" />
      <input type="text" name="director" value={movie.director} onChange={handleChange} placeholder="Direction" />
      <input type="text" name="year" value={movie.year} onChange={handleChange} placeholder="Année de sortie" />
      <input type="text" name="genre" value={movie.genre} onChange={handleChange} placeholder="Genre" />
      <textarea name="summary" value={movie.summary} onChange={handleChange} placeholder="Résumé" />
      <input type="text" name="posterUrl" value={movie.posterUrl} onChange={handleChange} placeholder="URL de l'image" />
      <button type="submit">Enregistrer les modifications</button>
    </form>
    </>
  );
};

export default EditMovie;
