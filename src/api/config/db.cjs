const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: '.env.local' /* path à supprimer si vous utilisez le .env et pas .env.local */ });

const connectDB = async () => {
  if (!process.env.MONGO_URI) {
    console.error('MongoDB URI non défini dans les variables d\'environnement.');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB a été connecté avec succès');
  } catch (err) {
    console.error('MongoDB : erreur de connexion:', err);
  }
};

module.exports = connectDB;
