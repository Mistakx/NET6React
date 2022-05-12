import {ApiSearch} from "./ApiSearch";
import axios from "axios";
import {TwitchSearchClipsResultPage} from "../../../models/apiRequests/TwitchSearchResults";
import {TwitchChannelSearch} from "../auxiliarySearches/TwitchChannelSearch";
import {TwitchClipSearchResultToListItemsConverter} from "../converters/TwitchClipSearchResultToListItemsConverter";
import {Platform} from "../platforms/Platform";
import Twitch from '../platforms/Twitch';

export class TwitchSearchClipByChannel extends ApiSearch {

    private static twitchSearchClipByBroadcaster: TwitchSearchClipByChannel

    private constructor() {
        super()
    }

    public static getInstance() {
        if (!TwitchSearchClipByChannel.twitchSearchClipByBroadcaster) {
            TwitchSearchClipByChannel.twitchSearchClipByBroadcaster = new TwitchSearchClipByChannel()
        }
        return TwitchSearchClipByChannel.twitchSearchClipByBroadcaster
    }

    public getPlatform(): Platform {
        return new Twitch();
    }

    public getButtonText() {
        return "Twitch - Clip (Channel)";
    }

    /**
     * https://dev.twitch.tv/docs/api/reference#get-clips
     */
    public async searchTwitchClipsByChannel(searchQuery: string, accessToken: string, limit: number, page: string | null) {

        let twitchChannels = await TwitchChannelSearch.searchTwitchChannels(searchQuery, accessToken, limit, page, false);

        const twitchClientId = process.env.REACT_APP_TWITCH_CLIENT_ID;

        let url = "https://api.twitch.tv/helix/clips"
            + "?broadcaster_id=" + twitchChannels.data[0].id
            + "&first=" + limit
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
            let twitchClipsSearchResponse = await axios(options);
            let twitchClipsResult: TwitchSearchClipsResultPage = twitchClipsSearchResponse.data;
            return twitchClipsResult;
        } catch (e) {
            alert(e)
        }
        return {} as TwitchSearchClipsResultPage

    }

    public async getSearchResults(searchQuery: string, page: number, limit: number, accessToken: string) {

        const twitchClipsPage = await this.searchTwitchClipsByChannel(searchQuery, accessToken, limit, null)
        const items = TwitchClipSearchResultToListItemsConverter.convert(twitchClipsPage)
        return items

    }

}