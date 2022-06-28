import {UserProfileDto} from "../../backendResponses/userRoute/UserProfileDto";
import {PlaylistDto} from "../../backendRequests/PlaylistRoute/PlaylistDto";

export interface FollowingModalState {

    showingFollowingOf: UserProfileDto | null
    setShowingFollowingOf: (showingFollowing: UserProfileDto | null) => void

    showingFollowingModal: boolean
    setShowingFollowingModal: (showingFollowingModal: boolean) => void

    resetFollowingModal: () => void

}
