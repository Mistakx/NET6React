import {PlaylistBasicDetails} from "../../../models/backendRequests/PlaylistRoute/PlaylistBasicDetails";
import {UserProfile} from "../../../models/backendRequests/UserRoute/UserProfile";
import {CommunitySearch} from "./CommunitySearch";
import {ApiSearch} from "../../apiRequests/specificSearches/ApiSearch";
import {Platform} from "../../apiRequests/platforms/Platform";
import Spotify from "../../apiRequests/platforms/Spotify";
import RecommendationRequests from "../RecommendationRequests";

export class UserRequest extends CommunitySearch {

    private static searchCommunityUsersInstance: CommunitySearch

    private constructor() {
        super();
    }

    static getInstance() {

        if (!UserRequest.searchCommunityUsersInstance) {
            UserRequest.searchCommunityUsersInstance = new UserRequest();
        }
        return UserRequest.searchCommunityUsersInstance

    }

    public getButtonText() {
        return "User";
    }

    public getSearchResults(searchQuery: string) {
        return RecommendationRequests.getTrendingUsers(searchQuery);
    }

}