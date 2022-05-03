import React from 'react';
import TwitchAuthenticator from "../../authenticators/TwitchAuthenticator";
import SpotifyAuthenticator from "../../authenticators/SpotifyAuthenticator";
import SearchBar from "./SearchBar";
import SearchLabel from "./SearchLabel";
import MauricioSearchBar from "./MauricioSearchBar";

function AuthenticatedSearchBar(): JSX.Element {

    const twitchAuthenticator = TwitchAuthenticator()
    const spotifyAuthenticator = SpotifyAuthenticator()

    return (
        <div>
            <MauricioSearchBar spotifyAuthenticator={spotifyAuthenticator} twitchAuthenticator={twitchAuthenticator}/>

            {/*<SearchBar spotifyAuthenticator={spotifyAuthenticator} twitchAuthenticator={twitchAuthenticator}/>*/}
        </div>
    )
}

export default AuthenticatedSearchBar;
