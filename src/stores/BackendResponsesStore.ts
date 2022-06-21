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

    createPlaylistResponse: null,
    setCreatePlaylistResponse: (createPlaylistResponse) => set(state => ({
        createPlaylistResponse: createPlaylistResponse
    })),

    editPlaylistResponse: null,
    setEditPlaylistResponse: (editPlaylistResponse) => set(state => ({
        editPlaylistResponse: editPlaylistResponse
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

    toggledFollowResponse: null,
    setToggledFollowResponse: (toggledFollowResponse) => set(state => ({
        toggledFollowResponse: toggledFollowResponse
    })),

    removedFollowerResponse: null,
    setRemovedFollowerResponse: (removedFollowerResponse) => set(state => ({
        removedFollowerResponse: removedFollowerResponse
    })),

}))

export default BackendResponsesStore;
