import {ApiSearch} from "./ApiSearch";
import axios from "axios";
import {TwitchSearchClipsResultPage} from "../../models/apiSearches/TwitchSearchResults";
import {TwitchChannelSearch} from "../auxiliarySearches/TwitchChannelSearch";
import {TwitchClipSearchResultToListItemsConverter} from "../converters/TwitchClipSearchResultToListItemsConverter";
import {TwitchClipPlayerCreator} from "../../playerCreators/TwitchClipPlayerCreator";
import {Platform} from "../../models/apiSearches/PlatformSearches";
import {VideoSearchList} from "../../searchLists/VideoSearchList";
import {TrackSearchList} from "../../searchLists/TrackSearchList";
import {LivestreamSearchList} from "../../searchLists/LivestreamSearchList";

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
        return "Twitch";
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
        }
        if (twitchClientId) {
            axios.defaults.headers.common['Client-Id'] = twitchClientId;
        } else {
            throw new Error("Twitch client ID not set in the environment variables.")
        }

        const options = {
            method: 'GET',
            headers: headers,
            withCredentials: false,
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

    public async getSearchList(searchQuery: string, page: number, limit: number, accessToken: string): Promise<VideoSearchList | TrackSearchList | LivestreamSearchList> {

        const twitchClipsPage = await this.searchTwitchClipsByChannel(searchQuery, accessToken, limit, null)
        const items = TwitchClipSearchResultToListItemsConverter.convert(twitchClipsPage)
        const searchList = new VideoSearchList(items, new TwitchClipPlayerCreator(super.getSearchListPlayerWidth(), super.getSearchListPlayerHeight()))
        return searchList

    }

}