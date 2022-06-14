import {
    GenericLivestreamResult,
    GeneralizedResult,
    GenericTrackResult,
    GenericVideoResult
} from "../../apiResponses/GenericResults";
import {UserProfileResponseDto} from "../../backendResponses/userRoute/UserProfileResponseDto";
import {PlaylistBasicDetails} from "../../backendRequests/PlaylistRoute/PlaylistBasicDetails";

export interface SearchedCommunityResultsState {

    searchedCommunityResults: UserProfileResponseDto[] | PlaylistBasicDetails[] | null
    setSearchedCommunityResults: (searchedCommunityResults: UserProfileResponseDto[] | PlaylistBasicDetails[]) => void

}
