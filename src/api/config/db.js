import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://tacitedamien444:06P47aCZ81*@movieproject.mddhl.mongodb.net/MoviesProject?retryWrites=true&w=majority');
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};

export default connectDB;
