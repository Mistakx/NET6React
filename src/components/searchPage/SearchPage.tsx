import React from 'react';
import SearchResults from "../SearchResults";
import Player from "../players/Player";
import SearchBar from "../SearchBar";

function SearchPage(): JSX.Element {

    console.log("%cRendered search page.", "color: cyan")

    return (

        <div className="SearchPage">

            <SearchBar/>

            <Player/>

            <SearchResults/>

        </div>

    )
}

export default SearchPage;
