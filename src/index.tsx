import React from 'react';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import SearchPage from "./components/searchPage/SearchPage";
import {createRoot} from "react-dom/client";
import ProfilePage from "./components/profilePage/ProfilePage";
import UsernamePage from "./components/userPage/UsernamePage";
import PlaylistPage from "./components/playlistPage/PlaylistPage";

const container = document.getElementById('root');

if (container !== null) {

    const root = createRoot(container);
    root.render(

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SearchPage/>}/>
                    <Route path="/profile" element={<ProfilePage/>}/>
                    <Route path="/user/:username" element={<UsernamePage/>}/>
                    <Route path="/playlist/" element={<PlaylistPage/>}/>
                </Routes>
            </BrowserRouter>

    );

}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
