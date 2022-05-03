import create from 'zustand'
import {SearchListState} from "../models/states/SearchListState";
import {VideoSearchList} from "../searchLists/VideoSearchList";
import {TrackSearchList} from "../searchLists/TrackSearchList";
import {LivestreamSearchList} from "../searchLists/LivestreamSearchList";

const SearchedListStore = create<SearchListState>((set) => ({

    searchedList: null,
    setSearchedList: (searchedList: VideoSearchList | TrackSearchList | LivestreamSearchList) => set(state => ({
        searchedList: searchedList
    }))


}))

export default SearchedListStore;

