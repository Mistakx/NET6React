import React from 'react';
import Player from "./players/Player";
import AuthenticatedSearchBar from "./searchBar/AuthenticatedSearchBar";
import SearchResults from "./SearchResults";

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
