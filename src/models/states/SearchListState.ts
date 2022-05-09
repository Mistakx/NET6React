import {VideoSearchList} from "../../searchLists/VideoSearchList";
import {TrackSearchList} from "../../searchLists/TrackSearchList";
import {LivestreamSearchList} from "../../searchLists/LivestreamSearchList";

export interface SearchListState {

    searchedList: VideoSearchList | TrackSearchList | LivestreamSearchList | null
    setSearchedList: (searchList: VideoSearchList | TrackSearchList | LivestreamSearchList) => void

}
