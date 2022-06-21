export interface BackendResponsesState {

    playlistCoverChangedResponse: string | null;
    setPlaylistCoverChangedResponse: (playlistCoverChangedResponse: string | null) => void

    newPlaylistResponse: string | null;
    setNewPlaylistResponse: (playlistCoverChangedResponse: string | null) => void

    deleteGeneralizedResultResponse: string | null;
    setDeleteGeneralizedResultResponse: (deleteGeneralizedResultResponse: string | null) => void

    updatedUserPhotoResponse: string | null;
    setUpdatedUserPhotoResponse: (updatedUserPhotoResponse: string | null) => void

    editOrCreatePlaylistResponse: string | null;
    setEditOrCreatePlaylistResponse: (editOrCreatePlaylistResponse: string | null) => void

    deletePlaylistResponse: string | null;
    setDeletePlaylistResponse: (editOrCreatePlaylistResponse: string | null) => void

    resetCoverResponse: string | null;
    setResetCoverResponse: (resetCoverResponse: string | null) => void

    updatedUserInfoResponse: string | null;
    setUpdatedUserInfoResponse: (updatedUserInfoResponse: string | null) => void

    toggledFollowResponse: string | null;
    setToggledFollowResponse: (toggledFollowResponse: string | null) => void

    removedFollowerResponse: string | null;
    setRemovedFollowerResponse: (removedFollowerResponse: string | null) => void

}
