import React from 'react';
import SpotifyTrack from "./SpotifyTrack";
import isEmptyObject from "../../utils/IsEmptyObject"
import SearchResultsStore from "../../stores/SearchResultsStore";
import YouTubeVideo from "./YouTubeVideo";
import VimeoVideo from "./VimeoVideo";
import {VimeoSearchVideoResult} from "../../models/ApiSearches/VimeoSearchResult"
import {SpotifyTracksPage} from "../../models/ApiSearches/SpotifySearchResults"
import {YouTubeSearchVideoResult} from "../../models/ApiSearches/YouTubeSearchResult"
import {
    TwitchSearchChannelResult,
    TwitchSearchClipResult,
    TwitchSearchVideoResult
} from "../../models/ApiSearches/TwitchSearchResults";
import TwitchClip from "./TwitchClip";
import TwitchVideo from "./TwitchVideo";
import TwitchLive from "./TwitchLive";

function SearchResults(): JSX.Element {

    const hasSearched = SearchResultsStore(state => state.hasSearched)
    const searchResultType = SearchResultsStore(state => state.searchResultType)
    const searchResult = SearchResultsStore(state => state.searchResults)

    let searchItems;
    if (searchResultType === "YouTubeVideo" && searchResult) {
        searchItems = (searchResult as YouTubeSearchVideoResult).items.map(item => <YouTubeVideo video={item}/>)
    } else if (searchResultType === "SpotifyTrack" && searchResult) {
        searchItems = (searchResult as SpotifyTracksPage).items.map(item => <SpotifyTrack track={item}/>)
    } else if (searchResultType === "VimeoVideo" && searchResult) {
        searchItems = (searchResult as VimeoSearchVideoResult).data.map(item => <VimeoVideo video={item}/>)
    } else if (searchResultType === "TwitchClip" && searchResult) {
        searchItems = (searchResult as TwitchSearchClipResult).data.map(item => <TwitchClip clip={item}/>)
    } else if (searchResultType === "TwitchVideo" && searchResult) {
        searchItems = (searchResult as TwitchSearchVideoResult).data.map(item => <TwitchVideo video={item}/>)
    } else if (searchResultType === "TwitchLive" && searchResult) {
        searchItems = (searchResult as TwitchSearchChannelResult).data.map(item => <TwitchLive channel={item}/>)
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
