import {GeneralizedResult} from "../../apiRequests/GenericResults";

export interface TwitchClipPlayerProperties {
    currentResult: GeneralizedResult
    results: GeneralizedResult[]
    setNextResult: (currentResult: (GeneralizedResult | null)) => void
}