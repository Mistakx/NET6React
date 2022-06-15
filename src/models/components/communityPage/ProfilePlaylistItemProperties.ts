import {PlaylistDto} from "../../backendRequests/PlaylistRoute/PlaylistDto";

export interface ProfilePlaylistItemProperties {
    basicDetails: PlaylistDto
    showingMyPlaylists: boolean
}