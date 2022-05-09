import {VideoSearchList} from "../../searchLists/VideoSearchList";
import {TrackSearchList} from "../../searchLists/TrackSearchList";
import {LivestreamSearchList} from "../../searchLists/LivestreamSearchList";
import {Platform} from "../platforms/Platform";

export abstract class ApiSearch {

    abstract getPlatform(): Platform

    abstract getButtonText(): string

    abstract getSearchList(searchQuery: string, page: number, limit: number, accessToken?: string): Promise<VideoSearchList | TrackSearchList | LivestreamSearchList>

}