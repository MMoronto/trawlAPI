const express = require('express');
const request = require('request-promise');

const app = express();
const PORT = process.env.PORT || 5000;

const apiKey = '';
const baseUrl = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Trawl API');
});

// GET Product Details
app.get('/products/:productId');

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));