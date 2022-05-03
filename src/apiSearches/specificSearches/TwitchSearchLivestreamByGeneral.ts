import {ApiSearch} from "./ApiSearch";
import {TwitchChannelSearch} from "../auxiliarySearches/TwitchChannelSearch";
import {Platform} from "../platforms/Platform";
import {
    TwitchChannelSearchResultToListItemsConverter
} from "../converters/TwitchChannelSearchResultToListItemsConverter";
import {LivestreamSearchList} from "../../searchLists/LivestreamSearchList";
import {MultiPlatformPlayerCreator} from "../../playerCreators/MultiPlatformPlayerCreator";
import {VideoSearchList} from "../../searchLists/VideoSearchList";
import {TrackSearchList} from "../../searchLists/TrackSearchList";
import Twitch from '../platforms/Twitch';

export class TwitchSearchLivestreamByGeneral extends ApiSearch {

    private static twitchSearchLivestreamByGeneral: TwitchSearchLivestreamByGeneral

    private constructor() {
        super()
    }

    public getPlatform(): Platform {
        return new Twitch();
    }

    public static getInstance() {
        if (!TwitchSearchLivestreamByGeneral.twitchSearchLivestreamByGeneral) {
            TwitchSearchLivestreamByGeneral.twitchSearchLivestreamByGeneral = new TwitchSearchLivestreamByGeneral()
        }
        return TwitchSearchLivestreamByGeneral.twitchSearchLivestreamByGeneral
    }

    public getButtonText() {
        return "Twitch - Livestream";
    }

    /**
     * https://dev.twitch.tv/docs/api/reference#search-channels
     */
    public async getSearchList(searchQuery: string, page: number, limit: number, accessToken: string): Promise<VideoSearchList | TrackSearchList | LivestreamSearchList> {

        const twitchChannelsPageResult = await TwitchChannelSearch.searchTwitchChannels(searchQuery, accessToken, limit, null, true)
        const items = TwitchChannelSearchResultToListItemsConverter.convert(twitchChannelsPageResult)
        const searchList = new LivestreamSearchList(items, new MultiPlatformPlayerCreator(super.getSearchListPlayerWidth(), super.getSearchListPlayerHeight(), "https://www.twitch.tv/"))
        return searchList

    }

}