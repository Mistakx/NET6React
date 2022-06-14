import {PlaylistBasicDetails} from "../../../models/backendRequests/PlaylistRoute/PlaylistBasicDetails";
import {UserProfileResponseDto} from "../../../models/backendResponses/userRoute/UserProfileResponseDto";

export abstract class CommunitySearch {

    abstract getButtonText(): string

    abstract getSearchResults(searchQuery: string, sessionToken: string): Promise<PlaylistBasicDetails[] | UserProfileResponseDto[]>

}