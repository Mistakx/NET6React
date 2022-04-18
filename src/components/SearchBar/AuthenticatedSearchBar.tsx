import React, {FormEvent, useRef, useState} from 'react';
import TestAuthenticatorNoState from "../../authenticators/TestAuthenticatorNoState";
import SearchBar from "./SearchBar";
import TwitchAuthenticator from "../../authenticators/TwitchAuthenticator";
import SpotifyAuthenticator from "../../authenticators/SpotifyAuthenticator";

function AuthenticatedSearchBar(): JSX.Element {

    console.log("%cRendered authenticated search bar.", "color: cyan")

    const spotifyAccessToken = SpotifyAuthenticator()
    const twitchAccessToken = TwitchAuthenticator()

    return (

        <SearchBar spotifyAccessToken={spotifyAccessToken} twitchAccessToken={twitchAccessToken}/>

    )
}

export default AuthenticatedSearchBar;
