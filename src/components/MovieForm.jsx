import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addMovie } from '../api';

const MovieForm = () => {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [summary, setSummary] = useState('');
  const [posterUrl, setPosterUrl] = useState('');
  const [error, setError] = useState(null); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMovie = { title, director, year, genre, summary, posterUrl };  
    try {
      await addMovie(newMovie);
      setError(null); 
      navigate('/');
    } catch (error) {
      console.error('Error adding movie:', error);
      setError('Erreur lors de l\'ajout du film. Veuillez réessayer.');
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
    <h1>Ajouter un nouveau film</h1>
      {error && <p className="error-message">{error}</p>}
      <input type="text" placeholder="Titre" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Direction" value={director} onChange={(e) => setDirector(e.target.value)} />
      <input type="text" placeholder="Année de sortie" value={year} onChange={(e) => setYear(e.target.value)} />
      <input type="text" placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
      <textarea placeholder="Résumé" value={summary} onChange={(e) => setSummary(e.target.value)} />
      <input type="text" placeholder="URL de la couverture du film" value={posterUrl} onChange={(e) => setPosterUrl(e.target.value)} />  
      <button type="submit">Ajouter ce film</button>
    </form>
    </>
  );
};

export default MovieForm;
