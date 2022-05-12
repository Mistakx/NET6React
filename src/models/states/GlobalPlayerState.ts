import {GenericResult} from "../apiRequests/GenericResults";

export interface GlobalPlayerState {

    playingGenericResult: GenericResult | null
    setPlayingGenericResult: (playingGenericResult: GenericResult | null) => void

}
