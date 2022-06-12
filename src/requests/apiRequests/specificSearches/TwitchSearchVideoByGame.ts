import {ApiSearch} from "./ApiSearch";
import axios from "axios";
import {TwitchSearchVideoResultPage} from "../../../models/apiResponses/TwitchSearchResults";
import {Platform} from "../platforms/Platform";
import {TwitchGamesSearch} from "../auxiliarySearches/TwitchGameSearch";
import {TwitchVideoSearchResultToListItemsConverter} from "../converters/TwitchVideoSearchResultToListItemsConverter";
import Twitch from '../platforms/Twitch';

export class TwitchSearchVideoByGame extends ApiSearch {

    private static twitchSearchVideoByGame: TwitchSearchVideoByGame

    private constructor() {
        super()
    }

    public static getInstance() {
        if (!TwitchSearchVideoByGame.twitchSearchVideoByGame) {
            TwitchSearchVideoByGame.twitchSearchVideoByGame = new TwitchSearchVideoByGame()
        }
        return TwitchSearchVideoByGame.twitchSearchVideoByGame
    }

    public getPlatform(): Platform {
        return new Twitch();
    }

    public getButtonText() {
        return "Twitch - Video (Game)";
    }


    /**
     * https://dev.twitch.tv/docs/api/reference#get-videos
     */
    public async searchTwitchVideosByGame(searchQuery: string, period: "all" | "day" | "week" | "month", sort: "trending" | "views" | "time", accessToken: string, limit: number, page: string | null) {

        let twitchGames = await TwitchGamesSearch.searchTwitchGames(searchQuery, accessToken, limit, page);

        const twitchClientId = process.env.REACT_APP_TWITCH_CLIENT_ID;

        let url = "https://api.twitch.tv/helix/videos"
            + "?game_id=" + twitchGames.data[0].id
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

        // @ts-ignore
        let twitchVideosSearchResponse = await axios(options);
        let twitchVideosResult: TwitchSearchVideoResultPage = twitchVideosSearchResponse.data;
        return twitchVideosResult;

    }

    public async getSearchResults(searchQuery: string, page: number, limit: number, accessToken: string) {

        const twitchVideoPageResult = await this.searchTwitchVideosByGame(searchQuery, "week", "trending", accessToken, limit, null)
        const items = TwitchVideoSearchResultToListItemsConverter.convert(twitchVideoPageResult)
        return items

    }

}