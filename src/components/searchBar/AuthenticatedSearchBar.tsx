import React from 'react';
import TwitchAuthenticator from "../../authenticators/TwitchAuthenticator";
import SpotifyAuthenticator from "../../authenticators/SpotifyAuthenticator";
import SearchBar from "./SearchBar";

function AuthenticatedSearchBar(): JSX.Element {

    const twitchAuthenticator = TwitchAuthenticator()
    const spotifyAuthenticator = SpotifyAuthenticator()

    return ( <SearchBar spotifyAuthenticator={spotifyAuthenticator} twitchAuthenticator={twitchAuthenticator}/>)
}

export default AuthenticatedSearchBar;
