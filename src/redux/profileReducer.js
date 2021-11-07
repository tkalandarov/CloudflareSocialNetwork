import {CREATE_POST} from "./types";

const initialState = {
    posts: [
        {
            author: "tkalandarov",
            msg: "Hey guys, I am very excited to announce that I am starting to work on the assignment by Cloudflare. Hopefully, it will help me land an internship =)",
            likes: 67,
            datePosted: "11/6/2021 9:42 PM"
        }
    ]
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST:
            // action.payload contains new post
            return {...state, posts: state.posts.concat([action.payload])};
    }
    return state;
}

export default profileReducer;