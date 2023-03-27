const movieControllers = require("./movies.controllers");

const getAllmovies = (req, res) => {
    movieControllers
        .findAllMovies()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(400), json({ message: "Bad request", err });
        });
};

const getMovieById = (req, res) => {
    const id = Number(req.params.id);
    movieControllers
        .findMoviesById(id)
        .then((data) => {
            if (!data) {
                return res
                    .status(400)
                    .json({ message: `Movie with id: ${id}, not found` });
            }
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(400), json({ message: "Bad request", err });
        });
};

const postNewmovie = (req, res) => {
    const movieObj = req.body;
    movieControllers
        .createMovie(movieObj)
        .then((data) => {
            res.status(201).json(data)
        })
        .catch((err) => {
            res.status(400).json({ Message: "Bad request", err });
        });
};

module.exports = {
    getAllmovies,
    getMovieById,
    postNewmovie
}
