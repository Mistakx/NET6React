import create from 'zustand'
import {SearchListState} from "../models/states/SearchListState";
import {VideoSearchList} from "../requests/apiRequests/searchLists/VideoSearchList";
import {TrackSearchList} from "../requests/apiRequests/searchLists/TrackSearchList";
import {LivestreamSearchList} from "../requests/apiRequests/searchLists/LivestreamSearchList";

const SearchedListStore = create<SearchListState>((set) => ({

    searchedList: null,
    setSearchedList: (searchedList: VideoSearchList | TrackSearchList | LivestreamSearchList) => set(state => ({
        searchedList: searchedList
    }))


}))

export default SearchedListStore;

