const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Helloooooooooo'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'Whats up?'},
        {id: 4, message: 'Qq'},
        {id: 5, message: 'Privet'}
    ],
    dialogs: [
        {id: 1, name: 'Timur'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'John'},
        {id: 4, name: 'Chris'},
        {id: 5, name: 'Ryan'}
    ],
    newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}] //push messages to array
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
}

export default dialogsReducer;