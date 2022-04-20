import {SpecificSearch} from "./SpecificSearch";
import axios from "axios";
import {TwitchSearchClipResult} from "../models/ApiSearches/TwitchSearchResults";
import {TwitchChannelSearch} from "./TwitchChannelSearch";
import {SpecificSearchType} from "../models/ApiSearches/PlatformSearches";

export class TwitchSearchVideoByChannel extends SpecificSearch {

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

    public getType(): SpecificSearchType {
        return "TwitchSearchVideoByChannel"
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
        let twitchClipsSearchResponse = await axios(options);
        let twitchClipsResult: TwitchSearchClipResult = twitchClipsSearchResponse.data;
        return twitchClipsResult;

    }

    public async defaultSearch(searchQuery: string, accessToken: string, limit: number, page: number) {
        return await this.searchTwitchVideosByChannel(searchQuery, "week", "trending", accessToken, limit, null)
    }

}