import {Platform} from "../../models/apiSearches/PlatformSearches";
import {VideoSearchList} from "../../searchLists/VideoSearchList";
import {TrackSearchList} from "../../searchLists/TrackSearchList";
import {LivestreamSearchList} from "../../searchLists/LivestreamSearchList";

export abstract class ApiSearch {

    abstract getPlatform(): Platform
    abstract getButtonText(): string
    abstract getSearchList(searchQuery: string, accessToken: string, limit: number, page: number): Promise<VideoSearchList | TrackSearchList | LivestreamSearchList>
}