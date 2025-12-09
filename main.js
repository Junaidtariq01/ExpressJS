// Import the Express.js library
const express = require('express');

// Create an Express application instance
const app = express();

// Define the port the server will listen on
const port = 3000;

// Define a route for the root URL ("/") that handles GET requests
app.get('/', (req, res) => {
  // Send a simple text response to the client
  res.send('Helloasravdf f E');
});

// Start the server and listen for incoming requests on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});