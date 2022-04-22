import {ApiSearch} from "../../apiSearches/specificSearches/ApiSearch";

export interface SearchState {

    chosenSearchQuery: string
    setChosenSearchQuery: (chosenSearchQuery: string) => void;

    chosenSearchType: ApiSearch
    setChosenSearchType: (search: ApiSearch) => void

}
