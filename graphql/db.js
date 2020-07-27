export let movies = [
  {
    id: "0",
    name: "A movie",
    score: 90,
  },
  {
    id: "1",
    name: "B movie",
    score: 83,
  },
  {
    id: "2",
    name: "C movie",
    score: 95,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovies = movies.filter((movie) => movie.id === String(id));
  return filteredMovies[0];
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== String(id));
  if (movie.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length}`,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
