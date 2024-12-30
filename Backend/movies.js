const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/moviesDB');

const movieSchema = new mongoose.Schema({
    title: String,
    year: String,
    genre: String,
    poster: String,
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;