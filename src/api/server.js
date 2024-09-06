import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import connectDB from './config/db.cjs';
import movieRoutes from './apiRoutes/movieRoutes.js';
import morgan from 'morgan';

dotenv.config();

const app = express();
const PORT = 3000;
(async () => {
  try {
    await connectDB();
    console.log('Connecté à la base de données');
  } catch (error) {
    console.error('Erreur de connexion à la base de données:', error);
  }
})();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan(':remote-addr - :method :url :status :res[content-length] - :response-time ms'));

app.use('/api/movies', movieRoutes);

app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).send('Quelque chose s\'est mal passé !');
});

app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
