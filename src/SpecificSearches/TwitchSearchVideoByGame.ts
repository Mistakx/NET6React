import {SpecificSearch} from "./SpecificSearch";
import axios from "axios";
import {TwitchSearchClipResult} from "../models/ApiSearches/TwitchSearchResults";
import {SpecificSearchType} from "../models/ApiSearches/PlatformSearches";
import {TwitchGamesSearch} from "./TwitchGameSearch";

export class TwitchSearchVideoByGame extends SpecificSearch {

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

    public getType(): SpecificSearchType {
        return "TwitchSearchVideoByGame"
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
        return await this.searchTwitchVideosByGame(searchQuery, "week", "trending", accessToken, limit, null)
    }


}