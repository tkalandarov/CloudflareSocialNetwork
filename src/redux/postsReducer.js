import {CREATE_POST, LIKE_POST} from "./types";

const initialState = {
    posts: [
        {
            id: 0,
            author: "tkalandarov",
            msg: "Hey guys, I am very excited to announce that I am starting to work on the assignment by Cloudflare. Hopefully, it will help me land an internship =)",
            likes: 67,
            datePosted: "11/6/2021 9:42 PM"
        },
        {
            id: 1,
            author: "so1ovova",
            msg: "Yay, look at me! I am so gorgeous =D",
            likes: 132,
            datePosted: "11/8/2021 3:11 PM"
        }
    ],
}

const postsReducer = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        case CREATE_POST:
            // action.payload contains new post
            action.payload.id = state.posts.at(-1).id + 1;
            return {...state, posts: state.posts.concat([action.payload])};
        case LIKE_POST:
            // action.payload is the post's id
            let post = state.posts.find(x => x.id === action.payload);
            if (post) {
                post.likes += 1;
            }
            return state;
    }
    return state;
}

export default postsReducer;