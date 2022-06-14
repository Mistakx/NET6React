import React from 'react';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import SearchPage from "./components/searchPage/SearchPage";
import HomePage from "./components/homePage/HomePage";
import {createRoot} from "react-dom/client";
import UserPage from "./components/userPage/UserPage";
import PlaylistPage from "./components/playlistPage/PlaylistPage";
import Login from "./components/loginPage/LoginPage";
import RegisterPage from "./components/registerPage/RegisterPage";
import SidePanel from "./components/SidePanel";
import GlobalPlayer from "./components/GlobalPlayer";
import Alert from "./components/Alert";
import LogRocket from 'logrocket';
import TrendingPage from "./components/trendingPage/TrendingPage";
import CommunityPage from "./components/communityPage/CommunityPage";
import RefreshedUserPage from "./components/userPage/RefreshedOtherUserPage";

// LogRocket.init('tcdmcx/playlist-manager');

const container = document.getElementById('root');

if (container !== null) {

    const root = createRoot(container);
    root.render(
        <BrowserRouter>

            <SidePanel/>
            <Alert/>
            <GlobalPlayer/>

            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/home" element={<HomePage/>}/>
                <Route path="/search" element={<SearchPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/user/:username" element={<RefreshedUserPage/>}/>
                <Route path="/playlist/:playlistId" element={<PlaylistPage/>}/>
                <Route path="/trending" element={<TrendingPage/>}/>
                <Route path="/community" element={<CommunityPage/>}/>
            </Routes>
        </BrowserRouter>
    );

}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
