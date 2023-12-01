import mongoose from 'mongoose';

//@ts-ignore
export async function connectToDatabase(DB_URI) {
  try {
    await mongoose.connect(DB_URI, {
      //@ts-ignore
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}