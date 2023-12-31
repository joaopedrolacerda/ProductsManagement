import express from 'express';
import dotenv from 'dotenv';
import { connectToDatabase } from './infra/mongo';
import routes from './routes';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/products-api';
app.use(express.json());

connectToDatabase(MONGODB_URI)


app.use(routes)
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(PORT, () => {
  console.log(`Server is running on PORT${PORT}`);
});

export default app;