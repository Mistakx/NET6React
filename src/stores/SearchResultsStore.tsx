import create from 'zustand'
import {SearchResultsState} from "../models/SearchResultsState";
import searchResults from "../components/SearchResults";
import {Video} from "youtube-api-search-typed/dist";

const SearchResultsStore = create<SearchResultsState>((set) => ({

    hasSearched: false,
    setHasSearched: (hasSearched) => set(state => ({
        hasSearched: hasSearched
    })),

    searchResultsPlatform: null,
    setSearchResultsPlatform: (searchResultsPlatform) => set(state => ({
        searchResultsPlatform: searchResultsPlatform
    })),

    searchResults: null,
    setSearchResults: (searchResults) => set(state => ({
        searchResults: searchResults
    })),


}))

export default SearchResultsStore;

