import {Platform} from "../Platform";
import {SearchContent} from "spotify-types";
import {Video} from "youtube-api-search-typed/dist";
import {VimeoSearch} from "../ApiRequests/VimeoSearch";

export interface SearchResultsState {

    hasSearched: boolean;
    setHasSearched: (hasSearched: boolean) => void;

    searchResultsPlatform: Platform | null
    setSearchResultsPlatform: (resultsPlatform: Platform) => void;

    searchResults: SearchContent | Video[] | VimeoSearch | null
    setSearchResults: (results: SearchContent | VimeoSearch | Video[]) => void;

}
