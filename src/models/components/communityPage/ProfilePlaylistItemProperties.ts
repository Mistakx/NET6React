import {PlaylistDto} from "../../backendRequests/PlaylistRoute/PlaylistDto";

export interface ProfilePlaylistItemProperties {
    basicDetails: PlaylistDto
    showingMyPlaylists: boolean // When the user's own playlists, we need to show them the dropdown menus, and allow them to sort the results
    showingPlaylistInSearch: boolean // When the user's playlists are being shown in the search, instead of the profile, we need to scale them differently
    draggable: boolean
}