import axios from "axios";
import {TwitchSearchCategoryResult} from "../models/ApiSearches/TwitchSearchResults";

export class TwitchGamesSearch {

    /**
     * https://dev.twitch.tv/docs/api/reference#search-categories
     */
    static async searchTwitchGames(searchQuery: string, accessToken: string, limit: number, page: string | null) {

        const twitchClientId = process.env.REACT_APP_TWITCH_CLIENT_ID;

        let url = "https://api.twitch.tv/helix/search/categories"
            + "?query=" + encodeURIComponent(searchQuery)
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
            url: url,
        };

        // @ts-ignore
        let twitchChannelsSearchResponse = await axios(options);
        let twitchChannelsSearchResult: TwitchSearchCategoryResult = twitchChannelsSearchResponse.data;
        return twitchChannelsSearchResult;

    }

}