// import profileReducer from "./profile-reducer";
// import dialogsReducer from "./dialogs-reducer";
// import sidebarReducer from "./sidebar-reducer";
//
// let store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: 'Hi babe', likes: 6},
//                 {id: 2, message: 'Ola todos!', likes: 2}
//             ],
//             newPostText: 'it-timur.com'
//         },
//         dialogsPage: {
//             messages: [
//                 {id: 1, message: 'Helloooooooooo'},
//                 {id: 2, message: 'Hi'},
//                 {id: 3, message: 'Whats up?'},
//                 {id: 4, message: 'Qq'},
//                 {id: 5, message: 'Privet'}
//             ],
//             dialogs: [
//                 {id: 1, name: 'Timur'},
//                 {id: 2, name: 'Alex'},
//                 {id: 3, name: 'John'},
//                 {id: 4, name: 'Chris'},
//                 {id: 5, name: 'Ryan'}
//             ],
//             newMessageBody: ""
//         },
//         sidebar:{},
//     },
//     _callSubscriber() {
//         console.log("State has changed!");
//     },
//
//     getState(){
//         return this._state;
//     },
//     subscribe(observer){
//         this._callSubscriber = observer;
//     },
//
//     dispatch(action){
//
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action);
//
//         this._callSubscriber(this._state);
//     }
// }
//
// export default store;