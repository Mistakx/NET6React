import {
    GenericLivestreamResult,
    GenericResult,
    GenericTrackResult,
    GenericVideoResult
} from "../apiRequests/GenericResults";

export interface SearchedResultsState {

    searchedResults: GenericResult[] | null
    setSearchedResults: (searchedResults: GenericResult[]) => void

}
