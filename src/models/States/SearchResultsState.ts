import {SearchResult} from "../ApiSearches/PlatformSearches";
import {VimeoSearchVideoResult} from "../ApiSearches/VimeoSearchResult";
import {YouTubeSearchVideoResult} from "../ApiSearches/YouTubeSearchResult";
import {SpotifyTracksPage} from "../ApiSearches/SpotifySearchResults";
import {
    TwitchSearchChannelResult,
    TwitchSearchClipResult,
    TwitchSearchVideoResult
} from "../ApiSearches/TwitchSearchResults";

export interface SearchResultsState {

    hasSearched: boolean;
    setHasSearched: (hasSearched: boolean) => void;

    searchResultType: SearchResult | null
    setSearchResultType: (resultType: SearchResult) => void;

    searchResults: SpotifyTracksPage | YouTubeSearchVideoResult | VimeoSearchVideoResult | TwitchSearchClipResult | TwitchSearchVideoResult | TwitchSearchChannelResult | null
    setSearchResults: (results: SpotifyTracksPage | YouTubeSearchVideoResult | VimeoSearchVideoResult | TwitchSearchClipResult | TwitchSearchVideoResult | TwitchSearchChannelResult) => void;

}
