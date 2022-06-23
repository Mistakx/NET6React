import create from 'zustand'
import {UserPlaylistsModalState} from "../../models/states/modals/UserPlaylistsModalState";

const UserPlaylistsModalStore = create<UserPlaylistsModalState>((set) => ({

    resultToAdd: null,
    setResultToAdd: (resultToAdd) => set(state => ({
        resultToAdd: resultToAdd
    })),

    showingPlaylistsModal: false,
    setShowingPlaylistsModal: (showingPlaylistsModal) => set(state => ({
        showingPlaylistsModal: showingPlaylistsModal
    })),

    resetUserPlaylistsModal: () => set(state => ({
        resultToAdd: null,
        showingPlaylistsModal: false
    }))

}))

export default UserPlaylistsModalStore;
