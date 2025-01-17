const axios = require("axios");

async function getAllMoviesGenerated() {
    try {
        const resp = await axios.get("http://localhost:3000/movies");
        generateMovies(resp.data);
    } catch (error) {
        console.log("Error fetching data:", error.message);
    } finally {
        console.log("Data fetched");
    }
}

function generateMovies(arrayMovies) {
    const container = document.getElementById("cardsContainer");
    arrayMovies.forEach((movie) => {
    const card = document.createElement("div");
    card.className = "card-container";

    const cardFront = document.createElement("div");
    cardFront.className = "card-front";
    const img = document.createElement("img");
    img.src = movie.poster;
    img.alt = `Poster of ${movie.title}`;
    cardFront.appendChild(img);

    const cardBack = document.createElement("div");
    cardBack.className = "card-back";
    const title = document.createElement("h3");
    title.textContent = movie.title;
    const year = document.createElement("p");
    year.textContent = `Year: ${movie.year}`;
    const director = document.createElement("p");
    director.textContent = `Director: ${movie.director}`;
    const duration = document.createElement("p");
    duration.textContent = `Duration: ${movie.duration}`;
    const genre = document.createElement("p");
    genre.textContent = `Genre: ${movie.genre}`;
    const rating = document.createElement("p");
    rating.textContent = `Rating: ${movie.rating}`;

    cardBack.appendChild(title);
    cardBack.appendChild(year);
    cardBack.appendChild(director);
    cardBack.appendChild(duration);
    cardBack.appendChild(genre);
    cardBack.appendChild(rating);

    card.appendChild(cardFront);
    card.appendChild(cardBack);

    container.appendChild(card);
});    
};

module.exports = getAllMoviesGenerated;

// Uso de JQuery 
// $.get("https://students-api.up.railway.app/movies", (data) => {
//     getAllMoviesGenerated(data);
// });