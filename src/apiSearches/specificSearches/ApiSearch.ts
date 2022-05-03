import {VideoSearchList} from "../../searchLists/VideoSearchList";
import {TrackSearchList} from "../../searchLists/TrackSearchList";
import {LivestreamSearchList} from "../../searchLists/LivestreamSearchList";
import {Platform} from "../platforms/Platform";

export abstract class ApiSearch {

    abstract getPlatform(): Platform

    abstract getButtonText(): string

    private searchListPlayerWidth = 400

    private searchListPlayerHeight = 400

    public getSearchListPlayerWidth(): number {
        return this.searchListPlayerWidth
    }

    public getSearchListPlayerHeight(): number {
        return this.searchListPlayerHeight
    }

    abstract getSearchList(searchQuery: string, page: number, limit: number, accessToken?: string): Promise<VideoSearchList | TrackSearchList | LivestreamSearchList>

}