import create from 'zustand'
import {SearchedResultsState} from "../models/states/SearchedResultsState";
import {
    GenericLivestreamResult,
    GeneralizedResult,
    GenericTrackResult,
    GenericVideoResult
} from "../models/apiRequests/GenericResults";

const SearchedListStore = create<SearchedResultsState>((set) => ({

    searchedResults: null,
    setSearchedResults: (searchedResults: GeneralizedResult[]) => set(state => ({
        searchedResults: searchedResults
    }))


}))

export default SearchedListStore;

