import create from 'zustand'
import {BackendResponsesState} from "../models/states/BackendResponsesState";

const BackendResponsesStore = create<BackendResponsesState>((set) => ({

    playlistCoverChangedResponse: null,
    setPlaylistCoverChangedResponse: (playlistCoverChangedResponse) => set(state => ({
        playlistCoverChangedResponse: playlistCoverChangedResponse
    })),

    newPlaylistResponse: null,
    setNewPlaylistResponse: (newPlaylistResponse) => set(state => ({
        newPlaylistResponse: newPlaylistResponse
    })),

    deleteGeneralizedResultResponse: null,
    setDeleteGeneralizedResultResponse: (deleteGeneralizedResultResponse) => set(state => ({
        deleteGeneralizedResultResponse: deleteGeneralizedResultResponse
    })),

    updatedUserPhotoResponse: null,
    setUpdatedUserPhotoResponse: (updatedUserPhotoResponse) => set(state => ({
        updatedUserPhotoResponse: updatedUserPhotoResponse
    })),

    editOrCreatePlaylistResponse: null,
    setEditOrCreatePlaylistResponse: (editOrCreatePlaylistResponse) => set(state => ({
        editOrCreatePlaylistResponse: editOrCreatePlaylistResponse
    })),

    deletePlaylistResponse: null,
    setDeletePlaylistResponse: (deletePlaylistResponse) => set(state => ({
        deletePlaylistResponse: deletePlaylistResponse
    })),

    resetCoverResponse: null,
    setResetCoverResponse: (resetCoverResponse) => set(state => ({
        resetCoverResponse: resetCoverResponse
    })),

    updatedUserInfoResponse: null,
    setUpdatedUserInfoResponse: (updatedUserInfoResponse) => set(state => ({
        updatedUserInfoResponse: updatedUserInfoResponse
    })),

}))

export default BackendResponsesStore;
