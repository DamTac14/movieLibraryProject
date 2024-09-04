import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ movies, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(value)
    );
    onSearch(filteredMovies);
  };

  const clearSearch = () => {
    setSearchTerm('');
    onSearch(movies); 
  };

  return (
    <div className='search-bar'>
      <input
        type="text"
        placeholder="Rechercher un film..."
        value={searchTerm}
        onChange={handleSearch}
      />
      {searchTerm && <button onClick={clearSearch}>✖</button>}
    </div>
  );
};

SearchBar.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      posterUrl: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
    })
  ).isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
