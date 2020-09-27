import axios from 'axios';

// export type for reducers
export const GET_DETAIL_MOVIE_REQUEST = "GET_DETAIL_MOVIE_REQUEST";
export const GET_DETAIL_MOVIE_SUCCESS = "GET_DETAIL_MOVIE_SUCCESS";
export const GET_DETAIL_MOVIE_FAILED = "GET_DETAIL_MOVIE_FAILED";


export const getDetailMovieRequest = () =>{
    return{
        type: GET_DETAIL_MOVIE_REQUEST,
    }
};

export const getDetailMovieSuccess = (result) =>{
    return{
        type: GET_DETAIL_MOVIE_SUCCESS,
        result
    }
};

export const getDetailMovieFailed = (error) =>{
    return{
        type: GET_DETAIL_MOVIE_FAILED,
        error
    }
};


// fetching data with axios
export const getDataDetailMovie = (id) =>{
    return (dispatch) =>{
        dispatch(getDetailMovieRequest());

        axios
        .get(`https://api.themoviedb.org/3/movie/${id}?api_key=fa9ce857395700f9e7e862a147bfffca`)
        .then((result) => dispatch(getDetailMovieSuccess(result.data)))
        .catch((error) => dispatch(getDetailMovieFailed(error)))
    }
}