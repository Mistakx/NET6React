import {GeneralizedResult, GenericLivestreamResult} from "../../../apiResponses/GenericResults";

export interface LivestreamSearchItemProperties {
    searchResult: GenericLivestreamResult
    searchResults: GeneralizedResult[]
}