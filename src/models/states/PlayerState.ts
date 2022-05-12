import {GenericResult} from "../apiRequests/GenericResults";

export interface PlayerState {

    playingGenericResult: GenericResult | null
    setPlayingGenericResult: (playingGenericResult: GenericResult | null) => void

}
