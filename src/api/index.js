const API_URL = 'http://localhost:3000/api/movies';

export const getMovies = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Le serveur ne répond pas');
    }
    const data = await response.json();
    return data; 
  };
  
export const getMovieById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error('Le serveur ne répond pas');
  }
  const data = await response.json();
  return data; 
};

export const addMovie = async (movie) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movie),
    });
    if (!response.ok) {
      throw new Error('Erreur lors de l\'ajout du film');
    }
    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateMovie = async (id, updatedMovie) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedMovie),
    });
    if (!response.ok) {
      throw new Error('Erreur lors de la mise à jour du film');
    }
    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteMovie = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Erreur lors de la suppression');
    }
    return { success: true };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
