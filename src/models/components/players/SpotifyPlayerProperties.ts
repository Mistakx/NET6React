import {GeneralizedResult} from "../../apiRequests/GenericResults";

export interface SpotifyPlayerProperties {
    currentResult: GeneralizedResult
    results: GeneralizedResult[]
    setNextResult: (currentResult: (GeneralizedResult | null)) => void
}