import {GeneralizedResult} from "../../apiResponses/GenericResults";

export interface MultiPlatformPlayerProperties {
    currentResult: GeneralizedResult
    results?: GeneralizedResult[] | null
    setNextResult?: (currentResult: (GeneralizedResult | null)) => void
    autoplay?: boolean
}