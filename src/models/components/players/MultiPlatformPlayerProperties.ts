import {GeneralizedResult} from "../../apiResponses/GenericResults";

export interface MultiPlatformPlayerProperties {
    currentResult: GeneralizedResult
    results: GeneralizedResult[]
    setNextResult: (currentResult: (GeneralizedResult | null)) => void
}