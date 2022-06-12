import {GeneralizedResult, GenericVideoResult} from "../../apiResponses/GenericResults";

export interface VideoSearchItemProperties {
    searchResult: GenericVideoResult
    searchResults: GeneralizedResult[]
}