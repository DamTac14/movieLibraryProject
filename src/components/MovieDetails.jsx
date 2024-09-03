import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieById, deleteMovie } from '../api';
import { useNavigate } from 'react-router-dom';
import '../styles/MovieDetails.css'; 

const MovieDetail = () => {
  const { movieId } = useParams(); 
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null); 
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

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

  const handleEdit = () => {
    navigate(`/edit-movie/${movieId}`);
  };

  const handleDelete = async () => {
    try {
      await deleteMovie(movieId);
      navigate('/');
    } catch (error) {
      console.error('Error deleting movie:', error);
      setError('Erreur lors de la suppression du film. Veuillez réessayer.'); 
    }
  };

  const showDeleteConfirm = () => {
    setShowConfirm(true);
  };

  const handleConfirmDelete = async (confirmed) => {
    if (confirmed) {
      await handleDelete();
    }
    setShowConfirm(false);
  };

  if (error) {
    return (
      <div className="error-message">
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Recharger la page</button>
      </div>
    );
  }

  if (!movie) return <div>Chargement du détail...</div>;

  return (
    <>
      <div className="movie-detail-container">
        <img src={movie.posterUrl} alt={movie.title} className="movie-poster" />
        <h2>{movie.title}</h2>
        <p><strong>Direction :</strong> {movie.director}</p>
        <p><strong>Année:</strong> {movie.year}</p>
        <p><strong>Genre:</strong> {movie.genre}</p>
        <p>{movie.summary}</p>
        <div>
        {showConfirm ? (
          <>
          <div className="confirm-delete">
              <p>Êtes-vous sûr de vouloir supprimer ce film ?</p>
              <button onClick={() => handleConfirmDelete(true)}>Oui</button>
              <button className="movie-detail-delete" onClick={() => handleConfirmDelete(false)}>Non</button>
              </div>
          </>
            ) : (
            <>
            <button onClick={handleEdit}>Éditer</button>
            <button className="movie-detail-delete" onClick={showDeleteConfirm}>Supprimer</button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
