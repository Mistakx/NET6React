import {ApiSearch} from "./ApiSearch";
import axios from "axios";
import {TwitchSearchVideoResultPage} from "../../models/apiSearches/TwitchSearchResults";
import {TwitchChannelSearch} from "../auxiliarySearches/TwitchChannelSearch";
import {Platform} from "../../models/apiSearches/PlatformSearches";
import {TwitchVideoSearchResultToListItemsConverter} from "../converters/TwitchVideoSearchResultToListItemsConverter";
import {MultiPlatformPlayerCreator} from "../../playerCreators/MultiPlatformPlayerCreator";
import {VideoSearchList} from "../../searchLists/VideoSearchList";
import {TrackSearchList} from "../../searchLists/TrackSearchList";
import {LivestreamSearchList} from "../../searchLists/LivestreamSearchList";

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
            'Client-Id': twitchClientId
        }

        const options = {
            method: 'GET',
            headers: headers,
            url: url,
        };

        try {
            // @ts-ignore
            let twitchVideosSearchResponse = await axios(options);
            let twitchVideosResult: TwitchSearchVideoResultPage = twitchVideosSearchResponse.data;
            return twitchVideosResult;
        } catch (e) {
            alert(e)
        }
        return {} as TwitchSearchVideoResultPage

    }

    public async getSearchList(searchQuery: string, page: number, limit: number, accessToken: string): Promise<VideoSearchList | TrackSearchList | LivestreamSearchList> {

        const twitchVideoPageResult = await this.searchTwitchVideosByChannel(searchQuery, "week", "trending", accessToken, limit, null)
        const items = TwitchVideoSearchResultToListItemsConverter.convert(twitchVideoPageResult)
        const searchList = new VideoSearchList(items, new MultiPlatformPlayerCreator(super.getSearchListPlayerWidth(), super.getSearchListPlayerHeight(), "https://www.twitch.tv/videos/"))
        return searchList

    }

}