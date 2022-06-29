import {GeneralizedResult} from "../../apiResponses/GenericResults";

export interface MixcloudPlayerProperties {
    currentResult: GeneralizedResult
    results?: GeneralizedResult[]
    setNextResult?: (currentResult: (GeneralizedResult | null)) => void
    autoplay?: boolean

}