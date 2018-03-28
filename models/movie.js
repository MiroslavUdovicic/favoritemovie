const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  released: Number,
  genre: String,
  actors: String,
  director: String,
  plot: String,
  poster: String,
  rating: Number
})

module.exports = mongoose.model("Movie", movieSchema);
