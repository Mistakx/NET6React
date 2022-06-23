import {UserProfileDto} from "../../backendResponses/userRoute/UserProfileDto";
import {PlaylistDto} from "../../backendRequests/PlaylistRoute/PlaylistDto";

export interface FollowersModalState {

    showingFollowersOf: UserProfileDto | PlaylistDto | null
    setShowingFollowersOf: (showingFollowersOf: UserProfileDto | PlaylistDto | null) => void

    showingFollowersModal: boolean
    setShowingFollowersModal: (showingUserFollowersModal: boolean) => void

    resetFollowersModal: () => void

}
