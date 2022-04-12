import React, {FormEvent, useEffect, useState} from 'react';
import SearchResults from "./SearchResults";
import SearchBar from "./SearchBar";
import Player from "../components/Player";

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
