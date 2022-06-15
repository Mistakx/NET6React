import {PlaylistDto} from "../../../models/backendRequests/PlaylistRoute/PlaylistDto";
import {UserProfileResponseDto} from "../../../models/backendResponses/userRoute/UserProfileResponseDto";

export abstract class CommunitySearch {

    abstract getButtonText(): string

    abstract getSearchResults(searchQuery: string, page: number, limit: number, sessionToken: string): Promise<PlaylistDto[] | UserProfileResponseDto[]>

}