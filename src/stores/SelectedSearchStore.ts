import create from 'zustand'
import {SearchState} from "../models/states/SearchState";
import {ApiSearch} from "../requests/apiRequests/specificSearches/ApiSearch";
import {YouTubeSearchVideoByGeneral} from "../requests/apiRequests/specificSearches/YouTubeSearchVideoByGeneral";

const SelectedSearchStore = create<SearchState>((set) => ({

    selectedSearch: YouTubeSearchVideoByGeneral.getInstance(),
    setSelectedSearch: (selectedSearch: ApiSearch) => set(state => ({
        selectedSearch: selectedSearch
    }))


}))

export default SelectedSearchStore;

