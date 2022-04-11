import {Platform} from "./Platform";
import {SearchContent} from "spotify-types";

export interface SearchResultsState {

    hasSearched: boolean;
    setHasSearched: (hasSearched: boolean) => void;

    searchResultsPlatform: Platform | null
    setSearchResultsPlatform: (resultsPlatform: Platform) => void;

    searchResults: SearchContent | null
    setSearchResults: (results: SearchContent) => void;

}
