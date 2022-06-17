// /Playlist/addToPlaylist
import {GeneralizedResult} from "../../apiResponses/GenericResults";

export interface AddContentToPlaylistDto {
    playlistId: string
    content: GeneralizedResult
}

