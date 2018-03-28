const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');


router.get("/api/movies", (req, res) => {
  Movie.find({}, (err, movies) => {
    if (err) {
      console.log(err);
    } else {
      res.json(movies);
    }
  })
});

router.post("/api/movies", (req, res) => {
  let newMovie = {
    title: req.body.title,
    released: req.body.released,
    genre: req.body.genre,
    actors: req.body.actors,
    director: req.body.director,
    plot: req.body.plot,
    poster: req.body.poster,
    rating: req.body.rating
  }

  Movie.create(newMovie, (err, createdMovie) => {
    if (err) {
      console.log(err);
    }else {
      res.json(createdMovie);
    }
  })
});


router.get("/api/movies/:id", (req, res) => {
  Movie.findById(req.params.id, (err, movie) => {
    if (err) {
      console.log(err);
    } else {
      res.json(movie);
    }
  });
});



module.exports = router;
