import React from 'react';
import TwitchAuthenticator from "../../../requests/authenticators/TwitchAuthenticator";
import SpotifyAuthenticator from "../../../requests/authenticators/SpotifyAuthenticator";
import SearchBar from "./SearchBar";

function AuthenticatedSearchBar(): JSX.Element {

    const twitchAuthenticator = TwitchAuthenticator()
    const spotifyAuthenticator = SpotifyAuthenticator()

    return (
        <div>
            <SearchBar spotifyAuthenticator={spotifyAuthenticator} twitchAuthenticator={twitchAuthenticator}/>
        </div>
    )
}

export default AuthenticatedSearchBar;
