import create from 'zustand'
import {SearchState} from "../models/states/SearchState";
import {YouTubeSearchVideoByGeneral} from "../apiSearches/specificSearches/YouTubeSearchVideoByGeneral";
import {ApiSearch} from "../apiSearches/specificSearches/ApiSearch";

const ChosenSearchStore = create<SearchState>((set) => ({

    chosenSearchQuery: "",
    setChosenSearchQuery: (chosenSearchQuery: string) => set(state => ({
        chosenSearchQuery: chosenSearchQuery
    })),

    chosenSearchType: YouTubeSearchVideoByGeneral.getInstance(),
    setChosenSearchType: (chosenSearchType: ApiSearch) => set(state => ({
        chosenSearchType: chosenSearchType
    })),

}))

export default ChosenSearchStore;

