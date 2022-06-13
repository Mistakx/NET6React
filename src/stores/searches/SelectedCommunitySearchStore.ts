import create from 'zustand'
import {SelectedPlatformSearchState} from "../../models/states/searches/SelectedPlatformSearchState";
import {ApiSearch} from "../../requests/apiRequests/specificSearches/ApiSearch";
import {YouTubeSearchVideoByGeneral} from "../../requests/apiRequests/specificSearches/YouTubeSearchVideoByGeneral";
import {UserRequest} from "../../requests/backendRequests/communitySearchBar/UserRequest";
import {SelectedCommunitySearchState} from "../../models/states/searches/SelectedCommunitySearchState";
import {CommunitySearch} from "../../requests/backendRequests/communitySearchBar/CommunitySearch";

const SelectedCommunitySearchStore = create<SelectedCommunitySearchState>((set) => ({

    searchBarQuery: "",
    setSearchBarQuery: (searchBarQuery: string) => set(state => ({
        searchBarQuery: searchBarQuery
    })),

    selectedCommunitySearch: UserRequest.getInstance(),
    setSelectedCommunitySearch: (selectedCommunitySearch: CommunitySearch) => set(state => ({
        selectedCommunitySearch: selectedCommunitySearch
    }))


}))

export default SelectedCommunitySearchStore;

