import {Platform} from "../Platform";
import {SearchContent} from "spotify-types";
import {VimeoSearchResult} from "../ApiSearches/VimeoSearchResult";
import {YouTubeSearchResult, YouTubeVideo} from "../ApiSearches/YouTubeSearchResult";
import {SpotifySearchResult} from "../ApiSearches/SpotifySearchResult";

export interface SearchResultsState {

    hasSearched: boolean;
    setHasSearched: (hasSearched: boolean) => void;

    searchResultsPlatform: Platform | null
    setSearchResultsPlatform: (resultsPlatform: Platform) => void;

    searchResults: SpotifySearchResult | YouTubeSearchResult | VimeoSearchResult | null
    setSearchResults: (results: SpotifySearchResult | YouTubeSearchResult | VimeoSearchResult) => void;

}
