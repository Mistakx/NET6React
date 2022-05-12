import {GenericResult} from "../apiRequests/GenericResults";

export interface PlaylistPagePlayerState {

    playingGenericResultPlaylistIndex: number | null
    setPlayingGenericResultPlaylistIndex: (playingGenericResultPlaylistIndex: number | null) => void

    playingGenericResult: GenericResult | null
    setPlayingGenericResult: (playingGenericResult: GenericResult | null) => void

}
