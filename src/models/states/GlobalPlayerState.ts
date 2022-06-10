import {GeneralizedResult} from "../apiRequests/GenericResults";

export interface GlobalPlayerState {

    globalPlayerCurrentResult: GeneralizedResult | null
    setGlobalPlayerCurrentResult: (globalPlayerCurrentResult: GeneralizedResult | null) => void

    searchCurrentResults: GeneralizedResult[] | null
    setSearchCurrentResults: (searchCurrentResults: GeneralizedResult[] | null) => void

}
