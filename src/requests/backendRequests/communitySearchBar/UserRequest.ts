import {CommunitySearch} from "./CommunitySearch";
import CommunityRequests from "../CommunityRequests";

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

    public getSearchResults(searchQuery: string, sessionToken: string) {
        return CommunityRequests.getUsers(searchQuery, sessionToken);
    }

}