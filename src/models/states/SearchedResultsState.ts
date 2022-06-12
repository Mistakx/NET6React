import {
    GenericLivestreamResult,
    GeneralizedResult,
    GenericTrackResult,
    GenericVideoResult
} from "../apiResponses/GenericResults";

export interface SearchedResultsState {

    searchedResults: GeneralizedResult[] | null
    setSearchedResults: (searchedResults: GeneralizedResult[]) => void

}
