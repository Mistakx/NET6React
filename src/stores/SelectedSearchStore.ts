import create from 'zustand'
import {SearchState} from "../models/states/SearchState";
import {ApiSearch} from "../apiSearches/specificSearches/ApiSearch";
import {YouTubeSearchVideoByGeneral} from "../apiSearches/specificSearches/YouTubeSearchVideoByGeneral";

const SelectedSearchStore = create<SearchState>((set) => ({

    selectedSearch: YouTubeSearchVideoByGeneral.getInstance(),
    setSelectedSearch: (selectedSearch: ApiSearch) => set(state => ({
        selectedSearch: selectedSearch
    }))


}))

export default SelectedSearchStore;

