import {GenericResult} from "../apiRequests/GenericResults";

export interface PlaylistModalState {

    resultToAdd: GenericResult | null
    setResultToAdd: (resultToAddId: GenericResult) => void

    showingPlaylistsModal: boolean
    setShowingPlaylistsModal: (showingPlaylistsModal: boolean) => void

}
