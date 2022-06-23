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
    })),

    resetEditOrCreatePlaylistModal: () => set(state => ({
        playlistToEditOrCreate: null,
        showingEditOrCreatePlaylistModal: false
    }))

}))

export default EditOrCreatePlaylistModalStore;
