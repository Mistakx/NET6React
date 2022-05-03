import React from 'react';
import TwitchAuthenticator from "../../../authenticators/TwitchAuthenticator";
import SpotifyAuthenticator from "../../../authenticators/SpotifyAuthenticator";
import MauricioSearchBar from "./MauricioSearchBar";

function AuthenticatedSearchBar(): JSX.Element {

    const twitchAuthenticator = TwitchAuthenticator()
    const spotifyAuthenticator = SpotifyAuthenticator()

    return (
        <div>
            <MauricioSearchBar spotifyAuthenticator={spotifyAuthenticator} twitchAuthenticator={twitchAuthenticator}/>
        </div>
    )
}

export default AuthenticatedSearchBar;
