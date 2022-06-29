import create from 'zustand'
import {SearchedPlaftormResultsState} from "../../models/states/searches/SearchedPlaftormResultsState";
import {
    GenericLivestreamResult,
    GeneralizedResult,
    GenericTrackResult,
    GenericVideoResult,
    GenericPodcastResult
} from "../../models/apiResponses/GenericResults";

const SearchedPlatformResultsStore = create<SearchedPlaftormResultsState>((set) => ({

    searchedResults: null,
    setSearchedResults: (searchedResults: GeneralizedResult[]) => set(state => ({
        searchedResults: searchedResults
    }))


}))

export default SearchedPlatformResultsStore;

