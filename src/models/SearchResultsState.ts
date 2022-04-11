import {Platform} from "./Platform";
import {SearchContent} from "spotify-types";
import {Video} from "youtube-api-search-typed/dist";

export interface SearchResultsState {

    hasSearched: boolean;
    setHasSearched: (hasSearched: boolean) => void;

    searchResultsPlatform: Platform | null
    setSearchResultsPlatform: (resultsPlatform: Platform) => void;

    searchResults: SearchContent | Video[] | null
    setSearchResults: (results: SearchContent | Video[]) => void;

}
