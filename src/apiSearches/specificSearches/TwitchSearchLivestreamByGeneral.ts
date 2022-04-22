import {ApiSearch} from "./ApiSearch";
import {TwitchChannelSearch} from "../auxiliarySearches/TwitchChannelSearch";
import {Platform} from "../../models/apiSearches/PlatformSearches";
import {SearchList} from "../../searchList/SearchList";
import {TwitchClipPlayer} from "../../players/TwitchClipPlayer";
import {
    TwitchChannelSearchResultToListItemsConverter
} from "../converters/TwitchChannelSearchResultToListItemsConverter";
import {LivestreamSearchList} from "../../searchList/LivestreamSearchList";

export class TwitchSearchLivestreamByGeneral extends ApiSearch {

    private static twitchSearchLivestreamByGeneral: TwitchSearchLivestreamByGeneral

    private constructor() {
        super()
    }

    public getPlatform(): Platform {
        return "Twitch";
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

    public async getSearchList(searchQuery: string, accessToken: string, limit: number, page: number) {

        const twitchChannelsPageResult = await TwitchChannelSearch.searchTwitchChannels(searchQuery, accessToken, limit, null, true)
        const items = TwitchChannelSearchResultToListItemsConverter.convert(twitchChannelsPageResult)
        const searchList = new LivestreamSearchList(items, "https://www.twitch.tv/", new TwitchClipPlayer())
        return searchList

    }

}