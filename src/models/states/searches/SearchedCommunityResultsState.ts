import {
    GenericLivestreamResult,
    GeneralizedResult,
    GenericTrackResult,
    GenericVideoResult
} from "../../apiResponses/GenericResults";
import {UserProfileDto} from "../../backendResponses/userRoute/UserProfileDto";
import {PlaylistDto} from "../../backendRequests/PlaylistRoute/PlaylistDto";

export interface SearchedCommunityResultsState {

    searchedCommunityResults: UserProfileDto[] | PlaylistDto[] | null
    setSearchedCommunityResults: (searchedCommunityResults: UserProfileDto[] | PlaylistDto[]) => void

}
