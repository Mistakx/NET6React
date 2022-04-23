import create from 'zustand'
import {SearchListState} from "../models/states/SearchListState";
import {VideoSearchList} from "../searchLists/VideoSearchList";
import {TrackSearchList} from "../searchLists/TrackSearchList";
import {LivestreamSearchList} from "../searchLists/LivestreamSearchList";

const SearchListStore = create<SearchListState>((set) => ({

    searchList: null,
        setSearchList: (searchList: VideoSearchList | TrackSearchList | LivestreamSearchList) => set(state => ({
    searchList: searchList
    }))


}))

export default SearchListStore;

