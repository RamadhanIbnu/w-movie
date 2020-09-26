import { GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_FAILED } from "../Action/NowPlaying.action";

const initialState = {
    data: [],
    loading: false,
    error: null,
}

export const showDataNowPlaying = (state=initialState, action) =>{
    switch (action.type) {
        case GET_DATA_REQUEST:
            return{
                ...state,

                loading:true,
            }
        case GET_DATA_SUCCESS:
            return{
                ...state,

                loading: false,
                data: action.result
            }
        case GET_DATA_FAILED:
            return{
                ...state,

                loading: false,
                error: action.error
            }
            
    
        default:
            return state;
    }
}