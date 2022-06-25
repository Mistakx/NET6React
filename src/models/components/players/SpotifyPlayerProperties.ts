import {GeneralizedResult} from "../../apiResponses/GenericResults";

export interface SpotifyPlayerProperties {
    currentResult: GeneralizedResult
    results: GeneralizedResult[]
    setNextResult: (currentResult: (GeneralizedResult | null)) => void
    autoplay: boolean
}