import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import postRoutes from './routes/postRoute.js';
import userRoutes from './routes/userRoute.js';

const app = express();

app.use(express.json());
connectDB();
dotenv.config();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`==> Sever running on port ${PORT} <==`.yellow.bold)
);
