import {ApiSearch} from "./ApiSearch";
import axios from "axios";
import {TwitchSearchVideoResultPage} from "../../models/apiSearches/TwitchSearchResults";
import {TwitchChannelSearch} from "../auxiliarySearches/TwitchChannelSearch";
import {Platform} from "../../models/apiSearches/PlatformSearches";
import {SearchList} from "../../searchList/SearchList";
import {TwitchVideoSearchResultToListItemsConverter} from "../converters/TwitchVideoSearchResultToListItemsConverter";
import {MultiPlatformPlayer} from "../../players/MultiPlatformPlayer";
import {VideoSearchList} from "../../searchList/VideoSearchList";

export class TwitchSearchVideoByChannel extends ApiSearch {

    private static twitchSearchVideoByChannel: TwitchSearchVideoByChannel

    private constructor() {
        super()
    }

    public static getInstance() {
        if (!TwitchSearchVideoByChannel.twitchSearchVideoByChannel) {
            TwitchSearchVideoByChannel.twitchSearchVideoByChannel = new TwitchSearchVideoByChannel()
        }
        return TwitchSearchVideoByChannel.twitchSearchVideoByChannel
    }

    public getPlatform(): Platform {
        return "Twitch";
    }

    public getButtonText() {
        return "Twitch - Video (Channel)";
    }

    /**
     * https://dev.twitch.tv/docs/api/reference#get-videos
     */
    public async searchTwitchVideosByChannel(searchQuery: string, period: "all" | "day" | "week" | "month", sort: "trending" | "views" | "time", accessToken: string, limit: number, page: string | null) {

        let twitchChannels = await TwitchChannelSearch.searchTwitchChannels(searchQuery, accessToken, limit, page, false);

        const twitchClientId = process.env.REACT_APP_TWITCH_CLIENT_ID;

        let url = "https://api.twitch.tv/helix/videos"
            + "?user_id=" + twitchChannels.data[0].id
            + "&first=" + limit
            + "&period=" + period
            + "&sort=" + sort

        if (page) {
            url += "&after=" + page;
        }

        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + accessToken,
        }
        if (twitchClientId) {
            axios.defaults.headers.common['Client-Id'] = twitchClientId;
        } else {
            throw new Error("Twitch client ID not set in the environment variables.")
        }

        const options = {
            method: 'GET',
            headers: headers,
            url: url,
        };

        // @ts-ignore
        let twitchVideosSearchResponse = await axios(options);
        let twitchVideosResult: TwitchSearchVideoResultPage = twitchVideosSearchResponse.data;
        return twitchVideosResult;

    }

    public async defaultSearch(searchQuery: string, accessToken: string, limit: number, page: number) {
        return await this.searchTwitchVideosByChannel(searchQuery, "week", "trending", accessToken, limit, null)
    }

    public async getSearchList(searchQuery: string, accessToken: string, limit: number, page: number) {

        const twitchVideoPageResult = await this.searchTwitchVideosByChannel(searchQuery, "week", "trending", accessToken, limit, null)
        const items = TwitchVideoSearchResultToListItemsConverter.convert(twitchVideoPageResult)
        const searchList = new VideoSearchList(items, "https://www.twitch.tv/videos/", new MultiPlatformPlayer())
        return searchList

    }

}