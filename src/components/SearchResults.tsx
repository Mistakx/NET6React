import React from 'react';
import SpotifyTrack from "./SpotifyTrack";
import isEmptyObject from "../utils/IsEmptyObject"
import SearchResultsStore from "../stores/SearchResultsStore";
import YouTubeVideo from "./YouTubeVideo";
import {Video} from "youtube-api-search-typed/dist";

function SearchResults(): JSX.Element {

    const hasSearched = SearchResultsStore(state => state.hasSearched)
    const searchResultsPlatform = SearchResultsStore(state => state.searchResultsPlatform)
    const searchResults = SearchResultsStore(state => state.searchResults)

    let searchItems;
    if (searchResultsPlatform === "Spotify" && searchResults && "tracks" in searchResults && searchResults.tracks) {
        searchItems = searchResults.tracks.items.map(item => <SpotifyTrack track={item}/>)
    } else if (searchResultsPlatform === "YouTube" && searchResults) {
        searchItems = (searchResults as Video[]).map(item => <YouTubeVideo video={item}/>)
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
        <div> {searchTable} </div>
    )

}

export default SearchResults;
