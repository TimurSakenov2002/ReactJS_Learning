import './index.css';
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux-store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

// setInterval(() => {
//     store.dispatch({type: "FAKE"})
// }, 1000);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
reportWebVitals();

