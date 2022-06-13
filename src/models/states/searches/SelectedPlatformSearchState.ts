import {ApiSearch} from "../../../requests/apiRequests/specificSearches/ApiSearch";

export interface SelectedPlatformSearchState {

    searchBarQuery: string
    setSearchBarQuery: (searchBarQuery: string) => void

    selectedSearch: ApiSearch,
    setSelectedSearch: (search: ApiSearch) => void

}
