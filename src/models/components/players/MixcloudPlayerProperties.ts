import {GeneralizedResult} from "../../apiResponses/GenericResults";

export interface MixcloudPlayerProperties {
    currentResult: GeneralizedResult
    results?: GeneralizedResult[] | null
    setNextResult?: (currentResult: (GeneralizedResult | null)) => void
    autoplay?: boolean

}