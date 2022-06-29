import React from 'react';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import SearchPage from "./components/pages/searchPage/SearchPage";
import HomePage from "./components/pages/homePage/HomePage";
import {createRoot} from "react-dom/client";
import UserPage from "./components/pages/userPage/UserPage";
import PlaylistPage from "./components/pages/playlistPage/PlaylistPage";
import Login from "./components/pages/loginPage/LoginPage";
import RegisterPage from "./components/pages/registerPage/RegisterPage";
import SidePanel from "./components/SidePanel";
import LiveRoom from "./components/liveRoom/LiveRoom";
import GlobalPlayer from "./components/globalPlayer/GlobalPlayer";
import Alert from "./components/Alert";
import LogRocket from 'logrocket';
import TrendingPage from "./components/pages/trendingPage/TrendingPage";
import CommunityPage from "./components/pages/communityPage/CommunityPage";
import RefreshedUserPage from "./components/pages/userPage/RefreshedOtherUserPage";
import FollowingPage from "./components/pages/followedPage/FollowingPage";

// LogRocket.init('tcdmcx/playlist-manager');

const container = document.getElementById('root');

if (container !== null) {

    const root = createRoot(container);
    root.render(
        <BrowserRouter>

            <SidePanel/>
            <LiveRoom/>
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
                <Route path="/following" element={<FollowingPage/>}/>
            </Routes>
        </BrowserRouter>
    );

}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
