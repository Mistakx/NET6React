import React from 'react';
import SpotifyTrackResult from "./SpotifyTrackResult";
import isEmptyObject from "../../utils/IsEmptyObject"
import SearchResultsStore from "../../stores/SearchResultsStore";
import YouTubeVideoResult from "./YouTubeVideoResult";
import VimeoVideoResult from "./VimeoVideoResult";
import {VimeoSearchVideoResult} from "../../models/ApiSearches/VimeoSearchResult"
import {SpotifyTracksPage} from "../../models/ApiSearches/SpotifySearchResults"
import {YouTubeSearchVideoResult} from "../../models/ApiSearches/YouTubeSearchResult"
import {
    TwitchSearchChannelResult,
    TwitchSearchClipResult,
    TwitchSearchVideoResult
} from "../../models/ApiSearches/TwitchSearchResults";
import TwitchClipResult from "./TwitchClipResult";
import TwitchVideoResult from "./TwitchVideoResult";
import TwitchLiveResult from "./TwitchLiveResult";

function SearchResults(): JSX.Element {

    const hasSearched = SearchResultsStore(state => state.hasSearched)
    const searchResultType = SearchResultsStore(state => state.searchResultType)
    const searchResult = SearchResultsStore(state => state.searchResults)

    let searchItems;
    if (searchResultType === "YouTubeVideoResult" && searchResult) {
        searchItems = (searchResult as YouTubeSearchVideoResult).items.map(item => <YouTubeVideoResult video={item}/>)
    } else if (searchResultType === "SpotifyTrackResult" && searchResult) {
        searchItems = (searchResult as SpotifyTracksPage).items.map(item => <SpotifyTrackResult track={item}/>)
    } else if (searchResultType === "VimeoVideoResult" && searchResult) {
        searchItems = (searchResult as VimeoSearchVideoResult).data.map(item => <VimeoVideoResult video={item}/>)
    } else if (searchResultType === "TwitchClipResult" && searchResult) {
        searchItems = (searchResult as TwitchSearchClipResult).data.map(item => <TwitchClipResult clip={item}/>)
    } else if (searchResultType === "TwitchVideoResult" && searchResult) {
        searchItems = (searchResult as TwitchSearchVideoResult).data.map(item => <TwitchVideoResult video={item}/>)
    } else if (searchResultType === "TwitchLiveResult" && searchResult) {
        searchItems = (searchResult as TwitchSearchChannelResult).data.map(item => <TwitchLiveResult channel={item}/>)
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
