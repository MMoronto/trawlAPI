const express = require('express');
const request = require('request-promise');

const app = express();
const PORT = preocess.env.PORT || 5000;
app.use(expresss.json());

app.get('/', (req, res) => {
    res.send('Welcome to Trawl API');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));