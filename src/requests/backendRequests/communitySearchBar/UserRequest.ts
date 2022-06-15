import {CommunitySearch} from "./CommunitySearch";
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

    public getSearchResults(searchQuery: string, page: number, limit: number, sessionToken: string) {
        return RecommendationRequests.getTrendingUsers(searchQuery, page, limit, sessionToken);
    }

}