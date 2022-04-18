import React from 'react';
import SpotifyTrack from "./SpotifyTrack";
import isEmptyObject from "../../utils/IsEmptyObject"
import SearchResultsStore from "../../stores/SearchResultsStore";
import YouTubeVideo from "./YouTubeVideo";
import VimeoVideo from "./VimeoVideo";
import {VimeoSearchResult} from "../../models/ApiSearches/VimeoSearchResult"
import {SpotifySearchResult} from "../../models/ApiSearches/SpotifySearchResult"
import {YouTubeSearchResult} from "../../models/ApiSearches/YouTubeSearchResult"
import {TwitchSearchResult} from "../../models/ApiSearches/TwitchChannelsSearchResult";
import TwitchClip from "./TwitchClip";

function SearchResults(): JSX.Element {

    const hasSearched = SearchResultsStore(state => state.hasSearched)
    const searchResultsPlatform = SearchResultsStore(state => state.searchResultsPlatform)
    const searchResult = SearchResultsStore(state => state.searchResults)

    let searchItems;
    if (searchResultsPlatform === "Spotify" && searchResult) {
        searchItems = (searchResult as SpotifySearchResult).tracks.items.map(item => <SpotifyTrack track={item}/>)
    } else if (searchResultsPlatform === "YouTube" && searchResult) {
        searchItems = (searchResult as YouTubeSearchResult).items.map(item => <YouTubeVideo video={item}/>)
    } else if (searchResultsPlatform === "Vimeo" && searchResult) {
        searchItems = (searchResult as VimeoSearchResult).data.map(item => <VimeoVideo video={item}/>)
    } else if (searchResultsPlatform === "Twitch" && searchResult) {
        searchItems = (searchResult as TwitchSearchResult).data.map(item => <TwitchClip clip={item}/>)
    }

    let searchTable;
    // No results
    if (hasSearched && searchResult && isEmptyObject(searchResult)) {
        searchTable = <p>No results</p>;
    }
    // Valid results
    else if (hasSearched && searchResult && !isEmptyObject(searchResult)) {
        searchTable = <ul className="items"> {searchItems} </ul>
    }


    return (
        <div> {searchTable} </div>
    )

}

export default SearchResults;
