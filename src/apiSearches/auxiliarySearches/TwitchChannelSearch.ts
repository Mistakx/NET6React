import axios from "axios";
import {TwitchSearchChannelsResultPage} from "../../models/apiSearches/TwitchSearchResults";

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
        let twitchChannelsSearchResponse = await axios(options);
        let twitchChannelsSearchResult: TwitchSearchChannelsResultPage = twitchChannelsSearchResponse.data;
        return twitchChannelsSearchResult;

    }

}