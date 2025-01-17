const axios = require("axios");
const cleanButton = document.getElementById("cleanButton");
const getAllMoviesGenerated = require("./getAllMoviesGenerated");

function postMovie() {
    const submitButton = document.getElementById("submitButton");
    const title = document.getElementById("title");
    const year = document.getElementById("year");
    const director = document.getElementById("director");
    const duration = document.getElementById("duration");
    const genre = document.getElementById("genre");
    const rating = document.getElementById("rating");
    const poster = document.getElementById("poster");

    submitButton.addEventListener("click", (event) => {
        const movie = {
            title: title.value,
            year: Number(year.value),
            director: director.value,
            duration: duration.value,
            genre: genre.value,
            rating: Number(rating.value),
            poster: poster.value,
        };

        if (!movie.title || !movie.year || !movie.director || !movie.duration || movie.genre.length === 0 || !movie.rating || !movie.poster) {
            alert("Todos los campos son requeridos");
            throw new Error("Todos los campos son requeridos");
        } else {
            axios
                .post("http://localhost:3000/movies", movie)
                .then((res) => {
                    if (res.status === 200, 201, 202) {
                        alert("¡Película añadida correctamente!");
                        getAllMoviesGenerated();
                    }
                })
                .catch((error) => {
                    console.log("Error agregando la película:", error.message);
                });
        }
    });
}

cleanButton.addEventListener('click', function (event) {
    event.preventDefault();
    title.value = '';
    year.value = '';
    director.value = '';
    duration.value = '';
    genre.value = '';
    rating.value = '';
    poster.value = '';
});

module.exports = postMovie;