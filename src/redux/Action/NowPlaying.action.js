import axios from 'axios'

export const GET_DATA_REQUEST = "GET_DATA_REQUEST";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILED = "GET_DATA_FAILED";

export const getDataRequest = () =>{
    return{
        type: GET_DATA_REQUEST
    }
};

export const getDataSuccess = (result) =>{
    return{
        type: GET_DATA_SUCCESS,
        result
    }
};

export const getDataFailed = (error) =>{
    return{
        type: GET_DATA_FAILED,
        error
    }
}

export const getDataNowPlaying = (id) =>{
    
    return (dispatch) => {
        dispatch(getDataRequest());

        axios
        .get('https://api.themoviedb.org/3/movie/now_playing?api_key=fa9ce857395700f9e7e862a147bfffca')
        .then((result) => dispatch(getDataSuccess(result.data)))
        .catch((error) =>dispatch(getDataFailed(error)))
    }
}