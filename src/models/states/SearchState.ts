import {ApiSearch} from "../../apiSearches/specificSearches/ApiSearch";

export interface SearchState {

    selectedSearch: ApiSearch,
    setSelectedSearch: (search: ApiSearch) => void

}
