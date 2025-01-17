const { getAllMoviesService, postMovieService } = require('../services');

module.exports = {
    getAllMoviesController: async (req, res) => {
        try {
            const moviesArray = await getAllMoviesService();
            res.json(moviesArray);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }      
    },

    postMovie: async (req, res) => { 
        try {
            const movieResponse = await postMovieService(req.body);
            res.json(movieResponse)
        } 
        catch (error) {
            res.send(error)
        }
    }
};
