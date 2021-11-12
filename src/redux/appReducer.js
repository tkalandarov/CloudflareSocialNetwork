import {DARK_THEME, LIGHT_THEME} from "./types";

const initialState = {
    isDark: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIGHT_THEME:
            return {...state, isDark: false};
        case DARK_THEME:
            return {...state, isDark: true};
        default:
            return state;
    }
}

export default appReducer;