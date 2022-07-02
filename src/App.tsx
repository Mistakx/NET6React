import React, {useEffect} from 'react';
import {BrowserRouter, Route, Routes, useLocation, useNavigate, useParams,} from "react-router-dom";
import SearchPage from "./components/pages/searchPage/SearchPage";
import HomePage from "./components/pages/homePage/HomePage";
import PlaylistPage from "./components/pages/playlistPage/PlaylistPage";
import Login from "./components/pages/loginPage/LoginPage";
import RegisterPage from "./components/pages/registerPage/RegisterPage";
import SidePanel from "./components/SidePanel";
import GlobalPlayer from "./components/globalPlayer/GlobalPlayer";
import Alert from "./components/Alert";
import LogRocket from 'logrocket';
import TrendingPage from "./components/pages/trendingPage/TrendingPage";
import CommunityPage from "./components/pages/communityPage/CommunityPage";
import RefreshedUserPage from "./components/pages/userPage/RefreshedOtherUserPage";
import FollowingPage from "./components/pages/followedPage/FollowingPage";
import LoginStore from "./stores/LoginStore";
import LiveRoom from "./components/liveRoom/LiveRoom";
import SkyPlaylistManagerAuthenticator from "./components/SkyPlaylistManagerAuthenticator";

// LogRocket.init('tcdmcx/playlist-manager');

export function App() {


    const isAuthenticated = LoginStore(state => state.isAuthenticated)


    return (
        <BrowserRouter>

            <SkyPlaylistManagerAuthenticator/>
            <SidePanel/>
            <LiveRoom/>
            <Alert/>
            <GlobalPlayer/>

            <Routes>
                <Route path="/"
                       element={<Login/>}/>
                <Route path="/register"
                       element={<RegisterPage/>}/>

                <Route path="/home"
                       element={isAuthenticated ? <HomePage/> : <Login/>}/>
                <Route path="/search"
                       element={isAuthenticated ? <SearchPage/> : <Login/>}/>
                <Route path="/user/:username"
                       element={isAuthenticated ? <RefreshedUserPage/> : <Login/>}/>
                <Route path="/playlist/:playlistId"
                       element={isAuthenticated ? <PlaylistPage/> : <Login/>}/>
                <Route path="/trending"
                       element={isAuthenticated ? <TrendingPage/> : <Login/>}/>
                <Route path="/community"
                       element={isAuthenticated ? <CommunityPage/> : <Login/>}/>
                <Route path="/following"
                       element={isAuthenticated ? <FollowingPage/> : <Login/>}/>
            </Routes>
        </BrowserRouter>
    );

}