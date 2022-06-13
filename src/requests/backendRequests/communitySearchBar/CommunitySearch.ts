import {PlaylistBasicDetails} from "../../../models/backendRequests/PlaylistRoute/PlaylistBasicDetails";
import {UserProfile} from "../../../models/backendRequests/UserRoute/UserProfile";

export abstract class CommunitySearch {

    abstract getButtonText(): string

    abstract getSearchResults(searchQuery: string, sessionToken?: string): Promise<PlaylistBasicDetails[] | UserProfile[]>

}