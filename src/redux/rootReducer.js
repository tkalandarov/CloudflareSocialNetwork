import {combineReducers} from "redux";
import postsReducer from "./postsReducer";
import dialogsReducer from "./dialogsReducer";

export const rootReducer = combineReducers({
    postsReducer, dialogsReducer
})