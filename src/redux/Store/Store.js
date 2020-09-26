import { createStore, applyMiddleware } from "redux";
import { showDataNowPlaying } from "../Reducers/NowPlaying.reducers";
import thunk  from "redux-thunk";

const store = createStore(showDataNowPlaying, applyMiddleware(thunk))

export default store;