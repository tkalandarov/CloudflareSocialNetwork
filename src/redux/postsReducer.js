import {CREATE_POST, FETCH_POSTS_BEGIN, FETCH_POSTS_FAILURE, FETCH_POSTS_SUCCESS, LIKE_POST} from "./types";

const initialState = {
    posts: [],
    isLoading: false,
    error: null
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS_BEGIN:
            console.log("fetch begun");
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_POSTS_SUCCESS:
            console.log("fetch success");
            return {
                ...state,
                loading: false,
                posts: action.payload.posts
            };

        case FETCH_POSTS_FAILURE:
            console.log("fetch failure");
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                posts: []
            };
        case CREATE_POST:
            // action.payload contains new post
            action.payload.id = state.posts.at(-1).id + 1;
            let newState = {...state, posts: state.posts.concat([action.payload])};
            syncWithKV(newState);
            return newState;
        case LIKE_POST:
            // action.payload is the post's id
            let post = state.posts.find(x => x.id === action.payload);
            if (post) {
                post.likes += 1;
            }
            syncWithKV(state);
            return state;
        default:
            return state;
    }
}

function syncWithKV(state) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({posts: state.posts})
    };
    fetch(`${process.env.PUBLIC_URL}/api/posts`, requestOptions)
        .then(response => {
            if (response.status === 200) {
                console.log("Synced with KV successfully!")
            }
        })
        .catch(error => {
            console.error('Error! Could not sync with KV', error);
        });
}

export default postsReducer;