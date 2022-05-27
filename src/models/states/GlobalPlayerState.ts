import {GeneralizedResult} from "../apiRequests/GenericResults";

export interface GlobalPlayerState {

    playingGenericResult: GeneralizedResult | null
    setPlayingGenericResult: (playingGenericResult: GeneralizedResult | null) => void

}
