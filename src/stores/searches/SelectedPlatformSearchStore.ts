import create from 'zustand'
import {SelectedPlatformSearchState} from "../../models/states/searches/SelectedPlatformSearchState";
import {ApiSearch} from "../../requests/apiRequests/specificSearches/ApiSearch";
import {YouTubeSearchVideoByGeneral} from "../../requests/apiRequests/specificSearches/YouTubeSearchVideoByGeneral";

const SelectedPlatformSearchStore = create<SelectedPlatformSearchState>((set) => ({

    searchBarQuery: "",
    setSearchBarQuery: (searchBarQuery: string) => set(state => ({
        searchBarQuery: searchBarQuery
    })),

    selectedSearch: YouTubeSearchVideoByGeneral.getInstance(),
    setSelectedSearch: (selectedSearch: ApiSearch) => set(state => ({
        selectedSearch: selectedSearch
    }))


}))

export default SelectedPlatformSearchStore;

