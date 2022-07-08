import {GeneralizedResult} from "../../apiResponses/GenericResults";

export interface TwitchClipPlayerProperties {
    currentResult: GeneralizedResult
    results?: GeneralizedResult[] | null
    setNextResult?: (currentResult: (GeneralizedResult | null)) => void
    autoplay?: boolean
}