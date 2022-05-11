import axios, {AxiosResponse} from "axios";
import {TwitchSearchChannelsResultPage} from "../../../models/apiRequests/TwitchSearchResults";

export class TwitchChannelSearch {

    /**
     * https://dev.twitch.tv/docs/api/reference#search-channels
     */
    static async searchTwitchChannels(searchQuery: string, accessToken: string, limit: number, page: string | null, live_only: boolean) {

        const twitchClientId = process.env.REACT_APP_TWITCH_CLIENT_ID;

        let url = "https://api.twitch.tv/helix/search/channels"
            + "?query=" + searchQuery
            + "&first=" + limit
            + "&live_only=" + live_only;

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

        let twitchChannelsSearchResponse: AxiosResponse<any, any>;
        try {
            // @ts-ignore
            twitchChannelsSearchResponse = await axios(options);
            let twitchChannelsSearchResult: TwitchSearchChannelsResultPage = twitchChannelsSearchResponse.data;
            return twitchChannelsSearchResult;
        } catch (e) {
            alert(e)
        }
        return {} as TwitchSearchChannelsResultPage

    }

}