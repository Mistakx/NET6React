import {ApiSearch} from "../../../requests/apiRequests/specificSearches/ApiSearch";
import {GeneralizedResult} from "../../apiResponses/GenericResults";

export interface SelectedPlatformSearchState {

    searchBarQuery: string
    setSearchBarQuery: (searchBarQuery: string) => void

    selectedSearch: ApiSearch,
    setSelectedSearch: (search: ApiSearch) => void

    recommendations: GeneralizedResult[],
    setRecommendations: (recommendations: GeneralizedResult[]) => void

    firstRecommendationsTitles: string[],
    setFirstRecommendationsTitles: (firstRecommendationsTitles: string[]) => void

}
