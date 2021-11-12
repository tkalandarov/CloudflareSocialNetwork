import {SEND_MESSAGE} from "./types";

const initialState = {
    messages: [
        { id: 0, msg: "Test message", dateSent: "11/7/2021", timeSent: "10:33" }
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type){
        case SEND_MESSAGE:
            // action.payload contains new post
            action.payload.id = state.messages.at(-1).id + 1;
            return {...state, messages: state.messages.concat([action.payload])};
        default: return state;
    }
};


export default dialogsReducer;