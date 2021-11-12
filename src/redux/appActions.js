import {DARK_THEME, LIGHT_THEME} from "./types";

export function enableDarkTheme() {
    return {
        type: DARK_THEME
    };
}

export function enableLightTheme() {
    return {
        type: LIGHT_THEME
    };
}