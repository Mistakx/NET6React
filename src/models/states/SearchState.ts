import {ApiSearch} from "../../apiRequests/specificSearches/ApiSearch";

export interface SearchState {

    selectedSearch: ApiSearch,
    setSelectedSearch: (search: ApiSearch) => void

}
