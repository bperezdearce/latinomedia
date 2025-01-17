document.addEventListener("DOMContentLoaded", () => {
    const movieForm = document.getElementById("movieForm");
    if (movieForm) {
        const postMovie = require("./postMovie");
        postMovie();
    }

    const getAllMoviesGenerated = require("./getAllMoviesGenerated");
    getAllMoviesGenerated();
});