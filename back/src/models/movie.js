const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const movieSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
    },
    year: {
        type: Number,
        required: [true, "Year is required"],
    },
    director: {
        type: String,
        required: [true, "Director is required"],
    },
    duration: {
        type: String,
        required: [true, "Duration is required"],
    },
    genre: {
        type: [String],
        required: [true, "Genre is required"],
    },
    rating: {
        type: Number,
        required: [true, "Rating is required"],  
    },
    poster: {
        type: String,
        required: [true, "Poster is required"], 
    }
});

const Movie = model("Movie", movieSchema);
module.exports = Movie;