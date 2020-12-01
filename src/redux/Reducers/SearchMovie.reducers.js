import { GET_SEARCH_MOVIE_REQUEST, GET_SEARCH_MOVIE_SUCCESS, GET_SEARCH_MOVIE_FAILED } from "../Action/SearchMovie.action";

const initialState = {
    data: [],
    Loading: false,
    error: null,
}

export const showSearchMovie = (state=initialState, action) => {
    switch (action.type) {
        case GET_SEARCH_MOVIE_REQUEST:
            return{
                ...state,

                loading:true,
            }
        case GET_SEARCH_MOVIE_SUCCESS:
            return{
                ...state,

                loading: false,
                data: action.result,
            }
        case GET_SEARCH_MOVIE_FAILED:
            return{
                loading: false,
                error: action.error
            }    
    
        default:
            return state;
    }
};