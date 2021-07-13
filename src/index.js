import './index.css';
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux-store";
import {Provider} from "react-redux";


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
            <App />
            </Provider>,
        </React.StrictMode>,
        document.getElementById('root')
    );
    reportWebVitals();
}

rerenderEntireTree(store.getState());

store.subscribe(() =>{
    let state = store.getState();
    rerenderEntireTree(state);
});
