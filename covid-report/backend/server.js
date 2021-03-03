import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import postRoutes from './routes/postRoute.js';
import userRoutes from './routes/userRoute.js';
import alertRoutes from './routes/alertRoute.js';

const app = express();

app.use(express.json());
connectDB();
dotenv.config();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);
app.use('/api/alerts', alertRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`==> Sever running on port ${PORT} <==`.yellow.bold)
);

// ================== Deployment to Heroku ==================
// Serve static assests if in production
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('frontend/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
}
