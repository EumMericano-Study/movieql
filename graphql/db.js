import axios from "axios";
const BASE_URL = "https://yts.mx/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAIL_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

export const getMovies = async (limit, rating) => {
    let REQUEST_URL = LIST_MOVIES_URL;

    const {
        data: {
            data: { movies },
        },
    } = await axios(REQUEST_URL, {
        params: {
            limit,
            minimum_rating: rating,
        },
    });
    return movies;
};

export const getMovie = async (id) => {
    let REQUEST_URL = MOVIE_DETAIL_URL;

    const {
        data: {
            data: { movie },
        },
    } = await axios(REQUEST_URL, { params: { movie_id: id } });
    return movie;
};

export const getSuggestions = async (id) => {
    let REQUEST_URL = MOVIE_SUGGESTIONS_URL;

    const {
        data: {
            data: { movies },
        },
    } = await axios(REQUEST_URL, { params: { movie_id: id } });
    return movies;
};
