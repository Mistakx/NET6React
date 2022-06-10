import {GeneralizedResult} from "../apiRequests/GenericResults";

export interface PlaylistPagePlayerState {

    playlistPlayerCurrentResult: GeneralizedResult | null
    setPlaylistPlayerCurrentResult: (playlistPlayerCurrentResult: GeneralizedResult | null) => void

    playlistCurrentResults: GeneralizedResult[] | null
    setPlaylistCurrentResults: (playlistCurrentResults: GeneralizedResult[] | null) => void

}
