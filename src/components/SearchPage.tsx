import React from 'react';
import SearchResults from "./SearchResults/SearchResults";
import SearchBar from "./SearchBar";
import Player from "./Player/Player";

function SearchPage(): JSX.Element {

    return (

        <div className="SearchPage">

            <SearchBar/>

            <Player/>

            <SearchResults/>

        </div>

    )
}

export default SearchPage;
