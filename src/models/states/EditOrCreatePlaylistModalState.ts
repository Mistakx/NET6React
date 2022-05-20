import {EditPlaylist} from "../backendRequests/PlaylistRoute/EditPlaylist";
import {CreatePlaylist} from "../backendRequests/PlaylistRoute/CreatePlaylist";

export interface EditOrCreatePlaylistModalState {

    playlistToEditOrCreate: EditPlaylist | CreatePlaylist | null
    setPlaylistToEditOrCreate: (playlistToEditOrCreate: EditPlaylist | CreatePlaylist | null) => void

    showingEditOrCreatePlaylistModal: boolean
    setShowingEditOrCreatePlaylistModal: (showingEditOrCreatePlaylistModal: boolean) => void

}
