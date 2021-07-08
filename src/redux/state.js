const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi babe', likes: 6},
                {id: 2, message: 'Ola todos!', likes: 2}
            ],
            newPostText: 'it-xyu.com'
        },
        dialogsPage: {
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
        }
    },
    _callSubscriber() {
        console.log("State has changed!");
    },

    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },

    dispatch(action){
        if(action.type === ADD_POST){
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likes: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }else if(action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default store;