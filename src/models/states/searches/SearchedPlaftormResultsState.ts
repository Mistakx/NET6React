import {
    GenericLivestreamResult,
    GeneralizedResult,
    GenericTrackResult,
    GenericVideoResult
} from "../../apiResponses/GenericResults";

export interface SearchedPlaftormResultsState {

    searchedResults: GeneralizedResult[] | null
    setSearchedResults: (searchedResults: GeneralizedResult[]) => void

}
