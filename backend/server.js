// Dependencies
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables
dotenv.config();

// Routes
const userRoutes = require('./routes/userRoutes');
const bookRouter = require('./routes/bookRoutes');

// Database connection
require('./config/dbConnect')();

// Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Static files
const __dirname2 = path.resolve();
app.use('/uploads', express.static(path.join(__dirname2, '/uploads')));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/books', bookRouter.bookRouter);

// Deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname2, '/frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname2, 'frontend', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}

// Error handling
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});