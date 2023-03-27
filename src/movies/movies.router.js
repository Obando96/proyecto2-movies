const router = require('express').Router();

const movieServices = require('./movies.services');

router.get('/movies', movieServices.getAllmovies);

router.post('/movies', movieServices.postNewmovie);

router.get('/movies/:id', movieServices.getMovieById);

module.exports = router;