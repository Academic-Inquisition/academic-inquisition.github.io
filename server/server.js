const express = require('express') // Gets the ExpressJS Module
const app = express() // Setup the ExpressJS App
const port = 3000 // Stores the Port Constant

const path = require('path') // Gets the NodeJS Path Module
const root = path.join(__dirname, '../') // Walks one step out of the package to get to the project root
const website = path.join(root, 'website') // Walks one step into the 'website' package

// If the server gets a GET request for http://localhost:3000 then it returns the index.html file found in root/website/
app.get('/', function(req, res) {
  res.sendFile(path.join(website, 'index.html'));
});

// Starts to listen to port 3000 for requests and such
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})