import create from 'zustand'
import {SearchResultsState} from "../models/States/SearchResultsState";

const SearchResultsStore = create<SearchResultsState>((set) => ({

    hasSearched: false,
    setHasSearched: (hasSearched) => set(state => ({
        hasSearched: hasSearched
    })),

    searchResultType: null,
    setSearchResultType: (searchResultType) => set(state => ({
        searchResultType: searchResultType
    })),

    searchResults: null,
    setSearchResults: (searchResults) => set(state => ({
        searchResults: searchResults
    })),


}))

export default SearchResultsStore;

