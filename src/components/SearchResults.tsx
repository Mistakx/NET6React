import React from 'react';
import SpotifyTrack from "./SpotifyTrack";
import isEmptyObject from "../utils/IsEmptyObject"
import {SearchResultsProperties} from "../models/ComponentProperties/SearchResultsProperties";

function SearchResults(props: SearchResultsProperties): JSX.Element {

    let searchItems;
    if (props.searchResults && props.searchedPlatform === "Spotify" && props.searchResults.tracks) {
        searchItems = props.searchResults.tracks.items.map(item => <SpotifyTrack track={item} setPlayingPlatform={props.setPlayingPlatform} setPlayingId={props.setPlayingId}/>)
    }


    let searchTable;
    // No results
    if (props.hasSearched && props.searchResults && isEmptyObject(props.searchResults)) {
        searchTable = <p>No results</p>;
    }
    // Valid results
    else if (props.hasSearched && props.searchResults && !isEmptyObject(props.searchResults)) {
        searchTable = <ul className="items"> {searchItems} </ul>
    }


    return (
        <div>
            {searchTable}
        </div>
    )

}

export default SearchResults;
