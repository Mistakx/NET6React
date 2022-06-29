import {GeneralizedResult, GenericPodcastResult} from "../../../../apiResponses/GenericResults";

export interface PodcastSearchItemProperties {
    searchResult: GenericPodcastResult
    searchResults: GeneralizedResult[]
}