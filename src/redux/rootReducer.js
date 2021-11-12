import {combineReducers} from "redux";
import postsReducer from "./postsReducer";
import dialogsReducer from "./dialogsReducer";
import appReducer from "./appReducer";

export const rootReducer = combineReducers({
    posts: postsReducer,
    app: appReducer,
    dialogsReducer
})