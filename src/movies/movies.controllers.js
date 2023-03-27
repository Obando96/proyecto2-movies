const moviesBd = [
    {
        id: 1,
        title: "Inter-estelar",
        description:
            "Gracias a un descubrimiento, un grupo de científicos y exploradores, encabezados por Cooper, se embarcan en un viaje espacial para encontrar un lugar con las condiciones necesarias para reemplazar a la Tierra y comenzar una nueva vida allí.",
        year: 2014,
        director: "Christopher Nolan",
    },
    {
        id: 2,
        title: "Los ilusionista",
        description:
            "Un agente federal y un detective de la Interpol juegan al gato y al ratón con unos ilusionistas astutos que les roban a los líderes de negocios corruptos durante sus actuaciones y traspasan el dinero a los miembros de la audiencia.",
        year: 2013,
        director: "Louis Leterrier",
    },
    {
        id: 3,
        title: "Hacker",
        description:
            "Mientras trabaja para una organización criminal en Internet, un joven hacker ucraniano decide vengarse de todo el sistema bancario después de que su madre pierde su trabajo.",
        year: 2016,
        director: "Akan Satajew",
    },
];

let moviesId = 3;

const findAllMovies = async () => {
    return moviesBd;
};

const findMoviesById = async (id) => {
    const data = moviesBd.find((movie) => movie.id === id);
    return data;
};

const createMovie = async (movieObj) => {
    const newMovie = {
        id: moviesId++,
        title: movieObj.title || "Undefined",
        description: movieObj.description || "Undefined",
        year: movieObj.year || "undefined",
        director: movieObj.director || "Undefined",
    };

    moviesBd.push(newMovie);
    return newMovie;
};

module.exports = {
    findAllMovies,
    findMoviesById,
    createMovie,
};
