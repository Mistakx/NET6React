import {GeneralizedResult} from "../../apiRequests/GenericResults";

export interface MultiPlatformPlayerProperties {
    currentResult: GeneralizedResult
    results: GeneralizedResult[]
    setNextResult: (currentResult: (GeneralizedResult | null)) => void
}