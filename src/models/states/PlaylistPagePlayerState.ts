import {GeneralizedResult} from "../apiRequests/GenericResults";

export interface PlaylistPagePlayerState {

    playingGenericResultPlaylistIndex: number | null
    setPlayingGenericResultPlaylistIndex: (playingGenericResultPlaylistIndex: number | null) => void

    playingGenericResult: GeneralizedResult | null
    setPlayingGenericResult: (playingGenericResult: GeneralizedResult | null) => void

}
