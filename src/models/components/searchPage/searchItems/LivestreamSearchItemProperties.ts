import {GeneralizedResult, GenericLivestreamResult} from "../../../apiRequests/GenericResults";

export interface LivestreamSearchItemProperties {
    searchResult: GenericLivestreamResult
    searchResults: GeneralizedResult[]
}