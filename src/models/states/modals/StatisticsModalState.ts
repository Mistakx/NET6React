import {UserProfileDto} from "../../backendResponses/userRoute/UserProfileDto";
import {PlaylistDto} from "../../backendRequests/PlaylistRoute/PlaylistDto";

export interface StatisticsModalState {

    showingStatisticsOf: UserProfileDto | PlaylistDto | null
    setShowingStatisticsOf: (showingStatisticsOf: UserProfileDto | PlaylistDto | null) => void

    showingStatisticsModal: boolean
    setShowingStatisticsModal: (showingStatisticsModal: boolean) => void

    resetStatisticsModal: () => void

}
