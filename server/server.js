const express = require('express')
const app = express()
const port = 3000

const path = require('path')
const root = path.join(__dirname, '../')
const website = path.join(root, 'website')

app.get('/', function(req, res) {
  res.sendFile(path.join(website, 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})