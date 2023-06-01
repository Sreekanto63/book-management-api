const express = require('express');
const mongoose = require('mongoose');
const booksRouter = require('./routes/books');

const app = express();
const PORT = 3000; // You can change this to any port number you prefer

// Connect to MongoDB
mongoose.connect('mongodb://localhost/bookstore', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Middleware
app.use(express.json());

// Routes
app.use('/books', booksRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
