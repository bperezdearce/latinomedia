const router = require('express').Router();
const {getAllMoviesController, postMovie} = require('../controllers');

router.get("/", function (req, res) {
    res.send("¡Hola mundo!");
});

router.get("/movies", getAllMoviesController);
router.post("/movies", postMovie);

module.exports = router; 