import {CREATE_POST, LIKE_POST, SEND_MESSAGE} from "./types";

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    };
}

export function likePost(postId) {
    return {
        type: LIKE_POST,
        payload: postId
    };
}

export function sendMessage(message) {
    return {
        type: SEND_MESSAGE,
        payload: message
    };
}