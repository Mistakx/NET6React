import {ApiSearch} from "../../requests/apiRequests/specificSearches/ApiSearch";

export interface SearchState {

    searchBarQuery: string
    setSearchBarQuery: (searchBarQuery: string) => void

    selectedSearch: ApiSearch,
    setSelectedSearch: (search: ApiSearch) => void

}
