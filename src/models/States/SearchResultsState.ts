import {Platform} from "../Platform";
import {VimeoSearchResult} from "../ApiSearches/VimeoSearchResult";
import {YouTubeSearchResult} from "../ApiSearches/YouTubeSearchResult";
import {SpotifySearchResult} from "../ApiSearches/SpotifySearchResult";
import {TwitchSearchResult} from "../ApiSearches/TwitchChannelsSearchResult";

export interface SearchResultsState {

    hasSearched: boolean;
    setHasSearched: (hasSearched: boolean) => void;

    searchResultsPlatform: Platform | null
    setSearchResultsPlatform: (resultsPlatform: Platform) => void;

    searchResults: SpotifySearchResult | YouTubeSearchResult | VimeoSearchResult | TwitchSearchResult | null
    setSearchResults: (results: SpotifySearchResult | YouTubeSearchResult | VimeoSearchResult | TwitchSearchResult) => void;

}
