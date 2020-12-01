import axios from 'axios';

// export type for reducers
export const GET_SEARCH_MOVIE_REQUEST = "GET_SEARCH_MOVIE_REQUEST";
export const GET_SEARCH_MOVIE_SUCCESS = "GET_SEARCH_MOVIE_SUCCESS";
export const GET_SEARCH_MOVIE_FAILED = "GET_SEARCH_MOVIE_FAILED";


export const getSearchMovieRequest = () =>{
    return{
        type: GET_SEARCH_MOVIE_REQUEST,
    }
};

export const getSearchMovieSuccess = (result) =>{
    return{
        type: GET_SEARCH_MOVIE_SUCCESS,
        result
    }
};

export const getSearchMovieFailed = (error) =>{
    return{
        type: GET_SEARCH_MOVIE_FAILED,
        error
    }
};

// fetching data with axios
export const getDataSearchMovie = (search) =>{
    return (dispatch) =>{
        dispatch(getSearchMovieRequest());

        axios
        .get(`https://api.themoviedb.org/3/search/movie?api_key=fa9ce857395700f9e7e862a147bfffca&query=${search}`)
        .then((result) => dispatch(getSearchMovieSuccess(result.data)))
        .catch((error) => dispatch(getSearchMovieFailed(error)))
    }
}