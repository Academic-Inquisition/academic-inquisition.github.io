const express = require('express'); // Gets the ExpressJS Module
const app = express(); // Setup the ExpressJS App
const port = 3000; // Stores the Port Constant

const path = require('path'); // Gets the NodeJS Path Module
const root = path.join(__dirname, '../'); // Walks one step out of the package to get to the project root
const website = path.join(root, 'website'); // Walks one step into the 'website' package

// Index Page
app.get('/', function(req, res) {
  res.sendFile(path.join(website, 'index.html'));
});

// 404 Page
app.get('/404', function(req, res) {
  res.sendFile(path.join(website, '404.html'));
});

// Starts to listen to port 3000 for requests and such
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// Handle 404 Errors
// DO NOTE: This has to be placed **>> LAST <<** in the call chain of both use and get implementations.
app.use(function(req, res, next) {
  res.status(404);

  if (req.accepts('html')) {
    res.redirect('/404');
    return;
  }

  if (req.accepts('json')) {
    res.json( { error: 'Not Found'} );
    return;
  }

  if (req.accepts('txt')) {
    res.type('txt').send('Not Found')
    return;
  }
});