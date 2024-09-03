import { BrowserRouter as Router, Link } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/add-movie">Ajouter un film</Link>
      </nav>
      <AppRoutes />
    </Router>
  );
}

export default App;
