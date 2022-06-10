import {GeneralizedResult, GenericVideoResult} from "../../apiRequests/GenericResults";

export interface VideoSearchItemProperties {
    searchResult: GenericVideoResult
    searchResults: GeneralizedResult[]
}