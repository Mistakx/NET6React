import {GeneralizedResult} from "../apiResponses/GenericResults";

export interface UserPlaylistsModalState {

    resultToAdd: GeneralizedResult | null
    setResultToAdd: (resultToAddId: GeneralizedResult) => void

    showingPlaylistsModal: boolean
    setShowingPlaylistsModal: (showingPlaylistsModal: boolean) => void

}
