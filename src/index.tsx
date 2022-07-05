import React from 'react';
import reportWebVitals from './reportWebVitals';
import {createRoot} from "react-dom/client";
import {App} from "./App";
// import LogRocket from "logrocket";

// LogRocket.init('tcdmcx/playlist-manager');

const container = document.getElementById('root');

if (container !== null) {

    const root = createRoot(container);
    root.render(
        <App/>
    );

}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
