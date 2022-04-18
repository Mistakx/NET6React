import create from 'zustand'
import {AccessTokensState} from "../models/States/AccessTokensState";
import {SearchBarState} from "../models/States/SearchBarState";
import {useRef} from "react";
import {Platform} from "../models/Platform";

const SearchBarStore = create<SearchBarState>((set) => ({

    searchQuery: useRef<string>(""),

    searchPlatform: "YouTube",
    setSearchPlatform: (searchPlatform) => set(state => ({
        searchPlatform: searchPlatform
    })),

}))

export default SearchBarStore;

