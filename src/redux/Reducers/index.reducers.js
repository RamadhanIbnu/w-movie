import { combineReducers } from "redux";
import { showDataNowPlaying } from "./NowPlaying.reducers";
import { showSearchMovie } from "./SearchMovie.reducers"
import { getDetailMovie } from "./DetailMovie.reducers";

const rootReducers = combineReducers({showDataNowPlaying, showSearchMovie, getDetailMovie})

export default rootReducers;