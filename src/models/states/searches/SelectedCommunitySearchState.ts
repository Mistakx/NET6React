import {CommunitySearch} from "../../../requests/backendRequests/communitySearchBar/CommunitySearch";
import {GeneralizedResult} from "../../apiResponses/GenericResults";

export interface SelectedCommunitySearchState {

    searchBarQuery: string
    setSearchBarQuery: (searchBarQuery: string) => void

    selectedCommunitySearch: CommunitySearch,
    setSelectedCommunitySearch: (search: CommunitySearch) => void

    recommendations: GeneralizedResult[],
    setRecommendations: (recommendations: GeneralizedResult[]) => void

    firstRecommendationsTitles: string[],
    setFirstRecommendationsTitles: (firstRecommendationsTitles: string[]) => void

}
