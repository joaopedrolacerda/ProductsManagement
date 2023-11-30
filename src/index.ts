import express from 'express';
import dotenv from 'dotenv';
import { connectToDatabase } from './infra/mongo';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/products-api';

app.use(express.json());

connectToDatabase(MONGODB_URI)

app.listen(PORT, () => {
  console.log(`Server is running on PORT${PORT}`);
});