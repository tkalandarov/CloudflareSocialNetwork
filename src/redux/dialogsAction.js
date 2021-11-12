import {SEND_MESSAGE} from "./types";

export function sendMessage(message) {
    return {
        type: SEND_MESSAGE,
        payload: message
    };
}