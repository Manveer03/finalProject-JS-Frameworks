const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// Serve static files from the public directory
app.use('/site', express.static(path.join(__dirname, 'public')));

// Load the JSON data
const destinations = require('./data/destinations.json');

// Define a route to get destinations based on category
app.get('/api/destinations', (req, res) => {
    const category = req.query.category;
    const filteredDestinations = destinations.filter(destination => 
        destination.category.toLowerCase().includes(category.toLowerCase())
    );
    res.json(filteredDestinations);
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).send("<h1>Error 404, Cannot find your request!<h1>");
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
