require('dotenv').config();
const express = require('express');
port = process.env.PORT || 3000
const app = express();

app.get('/', (req, res) => { 
  res.send("hello world deploye test")
})

app.listen(port);

