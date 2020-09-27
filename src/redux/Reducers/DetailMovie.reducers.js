import { GET_DETAIL_MOVIE_REQUEST, GET_DETAIL_MOVIE_SUCCESS, GET_DETAIL_MOVIE_FAILED } from "../Action/DetailMovie.action";

const initialState = {
    data: [],
    Loading: false,
    error: null,
}

export const getDetailMovie = (state=initialState, action) => {
    switch (action.type) {
        case GET_DETAIL_MOVIE_REQUEST:
            return{
                ...state,

                loading:true,
            }
        case GET_DETAIL_MOVIE_SUCCESS:
            return{
                ...state,

                loading: false,
                data: action.result,
            }
        case GET_DETAIL_MOVIE_FAILED:
            return{
                loading: false,
                error: action.error
            }    
    
        default:
            return state;
    }
};