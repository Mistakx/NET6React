import React, {FormEvent, useRef, useState} from 'react';
import Form from 'react-bootstrap/Form'
import {Platform} from "../../models/Platform";
import SearchResultsStore from '../../stores/SearchResultsStore'
import searchSpotifyTracks from "../../apiSearches/SpotifySearch";
import searchYouTubeVideos from "../../apiSearches/YouTubeSearch";
import searchVimeoVideos from "../../apiSearches/VimeoSearch";
import searchTwitchChannels from "../../apiSearches/TwitchSearch";
import SpotifyAuthenticator from "../../authenticators/SpotifyAuthenticator";
import TwitchAuthenticator from "../../authenticators/TwitchAuthenticator";
import TestAuthenticatorNoState from "../../authenticators/TestAuthenticatorNoState";
import SearchBar from "./SearchBar";

function AuthenticatedSearchBar(): JSX.Element {

    console.log("%cRendered authenticated search bar.", "color: cyan")

    // const spotifyAccessToken =" SpotifyAuthenticator()"
    // const twitchAccessToken = "TwitchAuthenticator()"
    const spotifyAccessToken = useRef("")
    const twitchAccessToken = useRef("")
    const testAccessToken = TestAuthenticatorNoState()

    return (

        <SearchBar spotifyAccessToken={spotifyAccessToken} twitchAccessToken={twitchAccessToken} testAccessToken={testAccessToken}/>

    )
}

export default AuthenticatedSearchBar;
