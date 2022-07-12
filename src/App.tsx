import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SearchPage from "./components/pages/searchPage/SearchPage";
import HomePage from "./components/pages/homePage/HomePage";
import PlaylistPage from "./components/pages/playlistPage/PlaylistPage";
import Login from "./components/pages/loginPage/LoginPage";
import RegisterPage from "./components/pages/registerPage/RegisterPage";
import SidePanel from "./components/SidePanel";
import GlobalPlayer from "./components/globalPlayer/GlobalPlayer";
import Alert from "./components/Alert";
import TrendingPage from "./components/pages/trendingPage/TrendingPage";
import CommunityPage from "./components/pages/communityPage/CommunityPage";
import RefreshedUserPage from "./components/pages/userPage/RefreshedOtherUserPage";
import FollowingPage from "./components/pages/followedPage/FollowingPage";
import LoginStore from "./stores/LoginStore";
import LiveRoom from "./components/liveRoom/LiveRoom";
import SkyPlaylistManagerAuthenticator from "./components/SkyPlaylistManagerAuthenticator";

export function App() {


    const isAuthenticated = LoginStore(state => state.isAuthenticated)
    const sessionToken = localStorage.getItem("sessionToken"); // When the user refreshes the page, he isn't yet authenticated, but has the necessary session token.

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
                       element={<HomePage/>}/>
                <Route path="/search"
                       element={isAuthenticated || sessionToken ? <SearchPage/> : <Login/>}/>
                <Route path="/user/:username"
                       element={isAuthenticated || sessionToken ? <RefreshedUserPage/> : <Login/>}/>
                <Route path="/playlist/:playlistId"
                       element={isAuthenticated || sessionToken ? <PlaylistPage/> : <Login/>}/>
                <Route path="/trending"
                       element={isAuthenticated || sessionToken ? <TrendingPage/> : <Login/>}/>
                <Route path="/community"
                       element={isAuthenticated || sessionToken ? <CommunityPage/> : <Login/>}/>
                <Route path="/following"
                       element={isAuthenticated || sessionToken ? <FollowingPage/> : <Login/>}/>
            </Routes>
        </BrowserRouter>
    );

}