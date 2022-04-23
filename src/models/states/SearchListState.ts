import {VideoSearchList} from "../../searchLists/VideoSearchList";
import {TrackSearchList} from "../../searchLists/TrackSearchList";
import {LivestreamSearchList} from "../../searchLists/LivestreamSearchList";

export interface SearchListState {

    searchList: VideoSearchList | TrackSearchList | LivestreamSearchList | null
    setSearchList: (searchList: VideoSearchList | TrackSearchList | LivestreamSearchList) => void


}
