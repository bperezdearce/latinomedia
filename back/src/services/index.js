const Movie = require("../models/Movie");  

module.exports = {
    getAllMoviesService: async () => {
        try {
            const movies = await Movie.find();
            return movies;
        } 
        catch (error) {
            throw error;
        }
    },

    postMovieService: async (data) => {
        try {
            const movie = new Movie(data);
            const response = await movie.save();
            return response;
        } 
        catch (error) {
            throw error;
        }
    }
};