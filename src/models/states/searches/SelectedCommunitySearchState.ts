import {CommunitySearch} from "../../../requests/backendRequests/communitySearchBar/CommunitySearch";

export interface SelectedCommunitySearchState {

    searchBarQuery: string
    setSearchBarQuery: (searchBarQuery: string) => void

    selectedCommunitySearch: CommunitySearch,
    setSelectedCommunitySearch: (search: CommunitySearch) => void

}
