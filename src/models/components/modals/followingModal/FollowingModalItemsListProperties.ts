import {UserProfileDto} from "../../../backendResponses/userRoute/UserProfileDto";

export interface FollowingModalItemsListProperties {
    showing: "Users" | "Playlists";
    showingFollowingOf: UserProfileDto;
}