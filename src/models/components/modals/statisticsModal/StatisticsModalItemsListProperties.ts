import {UserProfileDto} from "../../../backendResponses/userRoute/UserProfileDto";
import {PlaylistDto} from "../../../backendRequests/PlaylistRoute/PlaylistDto";

export interface StatisticsModalItemsListProperties {
    showingStatisticsOf: PlaylistDto | UserProfileDto;
}