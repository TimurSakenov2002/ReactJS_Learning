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
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}] //push messages to array
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    }
}

export default dialogsReducer;