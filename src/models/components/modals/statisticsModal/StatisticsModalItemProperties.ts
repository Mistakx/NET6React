import {UserProfileDto} from "../../../backendResponses/userRoute/UserProfileDto";
import {PlaylistDto} from "../../../backendRequests/PlaylistRoute/PlaylistDto";

export interface StatisticsModalItemProperties {
    follower: UserProfileDto
    showingFollowerOf: PlaylistDto | UserProfileDto | null
}