import {
    FETCH_POSTS_BEGIN,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
    CREATE_POST,
    LIKE_POST,
} from "./types";

export function fetchPosts() {
    console.log("fetching...")
    return dispatch => {
        dispatch(fetchPostsBegin());
        fetch(`${process.env.PUBLIC_URL}/api/posts`)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw(res.error);
                }
                const dataObj = JSON.parse(res);
                dispatch(fetchPostsSuccess(dataObj.posts));
                return dataObj.posts;
            })
            .catch(error => {
                dispatch(fetchPostsFailure(error));
            })
    };
}

export const fetchPostsBegin = () => ({
    type: FETCH_POSTS_BEGIN
});

export const fetchPostsSuccess = posts => ({
    type: FETCH_POSTS_SUCCESS,
    payload: {posts}
});

export const fetchPostsFailure = error => ({
    type: FETCH_POSTS_FAILURE,
    payload: {error}
});

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