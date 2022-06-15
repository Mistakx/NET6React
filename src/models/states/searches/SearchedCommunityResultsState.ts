import {
    GenericLivestreamResult,
    GeneralizedResult,
    GenericTrackResult,
    GenericVideoResult
} from "../../apiResponses/GenericResults";
import {UserProfileResponseDto} from "../../backendResponses/userRoute/UserProfileResponseDto";
import {PlaylistDto} from "../../backendRequests/PlaylistRoute/PlaylistDto";

export interface SearchedCommunityResultsState {

    searchedCommunityResults: UserProfileResponseDto[] | PlaylistDto[] | null
    setSearchedCommunityResults: (searchedCommunityResults: UserProfileResponseDto[] | PlaylistDto[]) => void

}
