const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB a été connecté avec succès');
  } catch (err) {
    console.error('MongoDB : erreur de connexion:', err);
  }
};

module.exports = connectDB;
