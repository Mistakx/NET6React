import React from 'react';
import SearchResults from "./SearchResults/SearchResults";
import Player from "./Player/Player";
import AuthenticatedSearchBar from "./SearchBar/AuthenticatedSearchBar";

function SearchPage(): JSX.Element {

    console.log("%cRendered search page.", "color: cyan")

    return (

        <div className="SearchPage">

            <AuthenticatedSearchBar/>

            <Player/>

            <SearchResults/>

        </div>

    )
}

export default SearchPage;
