import {PlaylistDto} from "../../../models/backendRequests/PlaylistRoute/PlaylistDto";
import {UserProfileDto} from "../../../models/backendResponses/userRoute/UserProfileDto";

export abstract class CommunitySearch {

    abstract getButtonText(): string

    abstract getSearchResults(searchQuery: string, page: number, limit: number, sessionToken: string): Promise<PlaylistDto[] | UserProfileDto[]>

}