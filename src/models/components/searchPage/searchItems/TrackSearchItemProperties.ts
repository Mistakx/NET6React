import {GeneralizedResult, GenericTrackResult} from "../../../apiRequests/GenericResults";

export interface TrackSearchItemProperties {
    searchResult: GenericTrackResult
    searchResults: GeneralizedResult[]
}