import axios from "axios";
const BASE_URL = "https://yts.mx/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;

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
