import { combineReducers } from "redux";
import { showDataNowPlaying } from "./NowPlaying.reducers";
import { getDetailMovie } from "./DetailMovie.reducers";

const rootReducers = combineReducers({showDataNowPlaying, getDetailMovie})

export default rootReducers;