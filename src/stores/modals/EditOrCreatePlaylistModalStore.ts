import create from 'zustand'
import {EditOrCreatePlaylistModalState} from "../../models/states/modals/EditOrCreatePlaylistModalState";

const EditOrCreatePlaylistModalStore = create<EditOrCreatePlaylistModalState>((set) => ({

    playlistToEditOrCreate: null,
    setPlaylistToEditOrCreate: (playlistToEditOrCreate) => set(state => ({
        playlistToEditOrCreate: playlistToEditOrCreate
    })),

    showingEditOrCreatePlaylistModal: false,
    setShowingEditOrCreatePlaylistModal: (showingEditOrCreatePlaylistModal) => set(state => ({
        showingEditOrCreatePlaylistModal: showingEditOrCreatePlaylistModal
    }))

}))

export default EditOrCreatePlaylistModalStore;
