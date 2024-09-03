// src/routes/AppRoutes.jsx
import { Route, Routes } from 'react-router-dom';
import MovieList from '../components/MovieList';
import MovieDetail from '../components/MovieDetails';  
import EditMovie from '../components/EditMovie';      
import MovieForm from '../components/MovieForm';      

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<MovieList />} />
    <Route path="/movies/:movieId" element={<MovieDetail />} />
    <Route path="/edit-movie/:movieId" element={<EditMovie />} />
    <Route path="/add-movie" element={<MovieForm />} />
  </Routes>
);

export default AppRoutes;
