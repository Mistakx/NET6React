import {VideoSearchList} from "../../requests/apiRequests/searchLists/VideoSearchList";
import {TrackSearchList} from "../../requests/apiRequests/searchLists/TrackSearchList";
import {LivestreamSearchList} from "../../requests/apiRequests/searchLists/LivestreamSearchList";

export interface SearchListState {

    searchedList: VideoSearchList | TrackSearchList | LivestreamSearchList | null
    setSearchedList: (searchList: VideoSearchList | TrackSearchList | LivestreamSearchList) => void

}
