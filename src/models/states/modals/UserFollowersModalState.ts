import {UserProfileDto} from "../../backendResponses/userRoute/UserProfileDto";
import {PlaylistDto} from "../../backendRequests/PlaylistRoute/PlaylistDto";

export interface UserFollowersModalState {

    showingFollowersOf: UserProfileDto | PlaylistDto | null
    setShowingFollowersOf: (showingFollowersOf: UserProfileDto | PlaylistDto) => void

    showingFollowersModal: boolean
    setShowingFollowersModal: (showingUserFollowersModal: boolean) => void

}
