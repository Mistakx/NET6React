import {UserProfileDto} from "../../../backendResponses/userRoute/UserProfileDto";
import {PlaylistDto} from "../../../backendRequests/PlaylistRoute/PlaylistDto";

export interface FollowersModalItemProperties {
    follower: UserProfileDto
    showingFollowerOf: PlaylistDto | UserProfileDto
}