import {rerenderEntireTree} from "../render";

let state = {
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
}


export let addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likes: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}
export default state;