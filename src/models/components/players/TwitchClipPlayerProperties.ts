import {GeneralizedResult} from "../../apiResponses/GenericResults";

export interface TwitchClipPlayerProperties {
    currentResult: GeneralizedResult
    results: GeneralizedResult[]
    setNextResult: (currentResult: (GeneralizedResult | null)) => void
    autoplay: boolean
}