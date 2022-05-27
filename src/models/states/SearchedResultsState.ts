import {
    GenericLivestreamResult,
    GeneralizedResult,
    GenericTrackResult,
    GenericVideoResult
} from "../apiRequests/GenericResults";

export interface SearchedResultsState {

    searchedResults: GeneralizedResult[] | null
    setSearchedResults: (searchedResults: GeneralizedResult[]) => void

}
