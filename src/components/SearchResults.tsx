import React from 'react';
import SpotifyTrack from "./SpotifyTrack";
import isEmptyObject from "../utils/IsEmptyObject"
import SearchResultsStore from "../stores/SearchResultsStore";

function SearchResults(): JSX.Element {

    const hasSearched = SearchResultsStore(state => state.hasSearched)
    const searchResultsPlatform = SearchResultsStore(state => state.searchResultsPlatform)
    const searchResults = SearchResultsStore(state => state.searchResults)

    let searchItems;
    if (hasSearched && searchResults && searchResultsPlatform === "Spotify" && searchResults.tracks) {
        searchItems = searchResults.tracks.items.map(item => <SpotifyTrack track={item}/>)
    }


    let searchTable;
    // No results
    if (hasSearched && searchResults && isEmptyObject(searchResults)) {
        searchTable = <p>No results</p>;
    }
    // Valid results
    else if (hasSearched && searchResults && !isEmptyObject(searchResults)) {
        searchTable = <ul className="items"> {searchItems} </ul>
    }


    return (
        <div>

            {console.log("Selected Platform")}
            {console.log(searchResultsPlatform)}

            {searchTable}

        </div>
    )

}

export default SearchResults;
