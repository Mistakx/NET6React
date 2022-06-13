import create from 'zustand'
import {GlobalPlayerState} from "../../models/states/players/GlobalPlayerState";

const GlobalPlayerStore = create<GlobalPlayerState>((set) => ({

    globalPlayerCurrentResult: null,
    setGlobalPlayerCurrentResult: (globalPlayerCurrentResult) => set(state => ({
        globalPlayerCurrentResult: globalPlayerCurrentResult
    })),

    searchCurrentResults: null,
    setSearchCurrentResults: (searchCurrentResults) => set(state => ({
        searchCurrentResults: searchCurrentResults
    }))

}))

export default GlobalPlayerStore;
