import {SearchList} from "../../searchList/SearchList";
import {Platform} from "../../models/apiSearches/PlatformSearches";
import {VideoSearchList} from "../../searchList/VideoSearchList";
import {TrackSearchList} from "../../searchList/TrackSearchList";
import {LivestreamSearchList} from "../../searchList/LivestreamSearchList";

export abstract class ApiSearch {

    abstract getPlatform(): Platform
    abstract getButtonText(): string
    abstract getSearchList(searchQuery: string, accessToken: string, limit: number, page: number): Promise<VideoSearchList | TrackSearchList | LivestreamSearchList>
}