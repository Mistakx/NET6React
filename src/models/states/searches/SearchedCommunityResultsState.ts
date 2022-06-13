import {
    GenericLivestreamResult,
    GeneralizedResult,
    GenericTrackResult,
    GenericVideoResult
} from "../../apiResponses/GenericResults";
import {UserProfile} from "../../backendRequests/UserRoute/UserProfile";
import {PlaylistBasicDetails} from "../../backendRequests/PlaylistRoute/PlaylistBasicDetails";

export interface SearchedCommunityResultsState {

    searchedCommunityResults: UserProfile[] | PlaylistBasicDetails[] | null
    setSearchedCommunityResults: (searchedCommunityResults: UserProfile[] | PlaylistBasicDetails[]) => void

}
