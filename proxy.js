/*const express = require('express');
const request = require('request');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/jokes/random', (req, res) => {
  request(
    { url: 'https://www.toptal.com/developers/feed2json/convert?url=http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Fworld%2Fafrica%2Frss.xml' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));*/
const express = require('express');
const cors = require('cors'); // Import the CORS middleware
const app = express();

// Enable CORS for all routes or specify your GitHub Pages site's origin
// Replace 'https://foladave.github.io/CRUNCH-NEWS/' with your GitHub Pages URL
app.use(cors({
  origin: 'https://foladave.github.io/CRUNCH-NEWS/',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  optionsSuccessStatus: 204,
}));

// Your routes and server logic go here

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
