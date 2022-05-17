import {GeneralizedResult} from "../apiRequests/GenericResults";

export interface PlaylistModalState {

    resultToAdd: GeneralizedResult | null
    setResultToAdd: (resultToAddId: GeneralizedResult) => void

    showingPlaylistsModal: boolean
    setShowingPlaylistsModal: (showingPlaylistsModal: boolean) => void

}
