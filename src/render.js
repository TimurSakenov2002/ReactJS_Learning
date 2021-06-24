import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import stateFromStateJs from './redux/state'
import {addPost} from "./redux/state";

export let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App stateFromIndexJs = {stateFromStateJs} addPost={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}


reportWebVitals();
