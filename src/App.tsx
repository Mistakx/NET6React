import React from 'react';
import {BrowserRouter, Route, Routes, useParams,} from "react-router-dom";
import SearchPage from "./components/pages/searchPage/SearchPage";
import HomePage from "./components/pages/homePage/HomePage";
import PlaylistPage from "./components/pages/playlistPage/PlaylistPage";
import Login from "./components/pages/loginPage/LoginPage";
import RegisterPage from "./components/pages/registerPage/RegisterPage";
import SidePanel from "./components/SidePanel";
import LiveRoom from "./components/LiveRoom";
import GlobalPlayer from "./components/globalPlayer/GlobalPlayer";
import Alert from "./components/Alert";
import LogRocket from 'logrocket';
import TrendingPage from "./components/pages/trendingPage/TrendingPage";
import CommunityPage from "./components/pages/communityPage/CommunityPage";
import RefreshedUserPage from "./components/pages/userPage/RefreshedOtherUserPage";
import FollowingPage from "./components/pages/followedPage/FollowingPage";
import LoginStore from "./stores/LoginStore";

// LogRocket.init('tcdmcx/playlist-manager');

export function App() {

    const isAuthenticated = LoginStore(state => state.isAuthenticated)
    const setLocation = LoginStore(state => state.setLocation)
    const urlId = useParams()
    return (
        <BrowserRouter>

            <SidePanel/>
            <LiveRoom/>
            <Alert/>
            <GlobalPlayer/>

            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/register" element={<RegisterPage/>}/>

                <Route path="/home"
                       element={isAuthenticated ? <HomePage/> : (setLocation("/home"), <Login/>)}/>
                <Route path="/search"
                       element={isAuthenticated ? <SearchPage/> : (setLocation("/search"), <Login/>)}/>
                <Route path="/user/:username"
                       element={isAuthenticated ? <RefreshedUserPage/> : (setLocation("/user/" + urlId), <Login/>)}/>
                <Route path="/playlist/:playlistId"
                       element={isAuthenticated ? <PlaylistPage/> : (setLocation("/playlist/" + urlId), <Login/>)}/>
                <Route path="/trending"
                       element={isAuthenticated ? <TrendingPage/> : (setLocation("/trending"), <Login/>)}/>
                <Route path="/community"
                       element={isAuthenticated ? <CommunityPage/> : (setLocation("/community"), <Login/>)}/>
                <Route path="/following"
                       element={isAuthenticated ? <FollowingPage/> : (setLocation("/following"), <Login/>)}/>
            </Routes>
        </BrowserRouter>
    );

}