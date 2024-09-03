import { useEffect, useState } from 'react';
import { getMovies } from '../api';
import { Link } from 'react-router-dom';
import '../styles/MovieList.css';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const fetchMovies = async () => {
    try {
      const data = await getMovies();
      setMovies(data);
      setError(null); 
    } catch (error) {
      console.error('Error fetching movies:', error);
      setError('Erreur de chargement des films. Veuillez réessayer.');
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  if (error) {
    return (
      <div className="error-message">
        <p>{error}</p>
        <button onClick={fetchMovies}>Réessayer</button>
        <button onClick={() => window.location.reload()}>Recharger la page</button>
      </div>
    );
  }

  if (!movies.length) return <div>Chargement des films...</div>;

  return (
    <>
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <Link to={`/movies/${movie.id}`}>
            <div className="movie-info">
              <img src={movie.posterUrl} alt={movie.title} className="movie-poster" />
                  <h2 className="movie-title">{movie.title}</h2>
                  <p className="movie-release-date">Date de sortie: {movie.year}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
    </>
  );
};

export default MovieList;
