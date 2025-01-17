const router = require("express").Router();
const Movie = require("../models/movies");

router.get("/", async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (error) {
        res.send(error);
}
});

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await Movie.findById(id);
        if (movie.title) {
            res.json(movie);
        } else {
            res.status(404).send("Not found");
        }
    } catch (error) {
        res.send(error);
    }
});

router.post("/", async (req, res) => {
    try {
        const movie = new Movie(req.body);
        await movie.save();
        res.status(201).send({ message: "created", data: movie });
    } catch (error) {
        res.send(error);
}
});

module.exports = router;