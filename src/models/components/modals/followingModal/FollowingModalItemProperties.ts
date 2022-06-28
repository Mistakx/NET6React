import {UserProfileDto} from "../../../backendResponses/userRoute/UserProfileDto";
import {PlaylistDto} from "../../../backendRequests/PlaylistRoute/PlaylistDto";

export interface FollowingModalItemProperties {
    following: UserProfileDto | PlaylistDto;
    showingFollowingOf: UserProfileDto | null
}