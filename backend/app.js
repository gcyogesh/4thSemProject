import http from 'http'
import { userRoutes } from './routes/userRoute.js';
import { pool } from './connection/db.js';
import dotenv from 'dotenv'
dotenv.config();

// Connect to the database (optional)
pool.connect((err) => {
  if (err) {
    console.error('Database connection error:', err.stack);
  } else {
    console.log('Connected to PostgreSQL database');
  }
});


// Create an HTTP server
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  userRoutes(req, res); // Route the request
});

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
