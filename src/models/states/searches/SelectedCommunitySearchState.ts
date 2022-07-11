import {CommunitySearch} from "../../../requests/backendRequests/communitySearchBar/CommunitySearch";
import {GeneralizedResult} from "../../apiResponses/GenericResults";
import {PlaylistDto} from "../../backendRequests/PlaylistRoute/PlaylistDto";
import {UserProfileDto} from "../../backendResponses/userRoute/UserProfileDto";

export interface SelectedCommunitySearchState {

    searchBarQuery: string
    setSearchBarQuery: (searchBarQuery: string) => void

    selectedCommunitySearch: CommunitySearch,
    setSelectedCommunitySearch: (search: CommunitySearch) => void

    recommendations: PlaylistDto[] | UserProfileDto[],
    setRecommendations: (recommendations: PlaylistDto[] | UserProfileDto[]) => void

    firstRecommendationsTitles: string[],
    setFirstRecommendationsTitles: (firstRecommendationsTitles: string[]) => void

}
