const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const moviesRoutes = require('./routes/movies');



mongoose.connect("mongodb://movieapp:movie@ds129156.mlab.com:29156/movieappmiroslav")

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(cors());
app.use(moviesRoutes);

app.get("/", (req, res) => {
  res.send("Home");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started!");
});
