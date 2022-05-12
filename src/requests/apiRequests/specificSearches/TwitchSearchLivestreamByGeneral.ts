import {ApiSearch} from "./ApiSearch";
import {TwitchChannelSearch} from "../auxiliarySearches/TwitchChannelSearch";
import {Platform} from "../platforms/Platform";
import {
    TwitchLivestreamSearchResultToListItemsConverter
} from "../converters/TwitchLivestreamSearchResultToListItemsConverter";
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
    public async getSearchResults(searchQuery: string, page: number, limit: number, accessToken: string) {

        const twitchChannelsPageResult = await TwitchChannelSearch.searchTwitchChannels(searchQuery, accessToken, limit, null, true)
        const items = TwitchLivestreamSearchResultToListItemsConverter.convert(twitchChannelsPageResult)
        return items

    }

}