import React from 'react';
import SearchResults from "./SearchResults/SearchResults";
import SearchBar from "./SearchBar";
import Player from "./Player/Player";
import SpotifyAuthenticator from "../authenticators/SpotifyAuthenticator";
import TwitchAuthenticator from "../authenticators/TwitchAuthenticator";

function SearchPage(): JSX.Element {

    console.log("%cRendered search page.", "blue")

    return (

        <div className="SearchPage">

            <SearchBar/>

            <Player/>

            <SearchResults/>

        </div>

    )
}

export default SearchPage;
