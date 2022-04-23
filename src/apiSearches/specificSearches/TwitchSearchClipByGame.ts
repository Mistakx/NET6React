import {ApiSearch} from "./ApiSearch";
import axios from "axios";
import {TwitchSearchClipsResultPage} from "../../models/apiSearches/TwitchSearchResults";
import {Platform} from "../../models/apiSearches/PlatformSearches";
import {TwitchGamesSearch} from "../auxiliarySearches/TwitchGameSearch";
import {TwitchClipSearchResultToListItemsConverter} from "../converters/TwitchClipSearchResultToListItemsConverter";
import {TwitchClipPlayerCreator} from "../../playerCreators/TwitchClipPlayerCreator";
import {VideoSearchList} from "../../searchLists/VideoSearchList";

export class TwitchSearchClipByGame extends ApiSearch {

    private static twitchSearchClipByGame: TwitchSearchClipByGame

    private constructor() {
        super()
    }

    public static getInstance() {
        if (!TwitchSearchClipByGame.twitchSearchClipByGame) {
            TwitchSearchClipByGame.twitchSearchClipByGame = new TwitchSearchClipByGame()
        }
        return TwitchSearchClipByGame.twitchSearchClipByGame
    }

    public getPlatform(): Platform {
        return "Twitch";
    }

    public getButtonText() {
        return "Twitch - Clip (Game)";
    }

    /**
     * https://dev.twitch.tv/docs/api/reference#get-clips
     */
    public async searchTwitchClipsByGame(searchQuery: string, accessToken: string, limit: number, page: string | null) {

        let twitchGames = await TwitchGamesSearch.searchTwitchGames(searchQuery, accessToken, limit, page);

        const twitchClientId = process.env.REACT_APP_TWITCH_CLIENT_ID;

        let url = "https://api.twitch.tv/helix/clips"
            + "?game_id=" + twitchGames.data[0].id
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
        let twitchClipsSearchResponse = await axios(options);
        let twitchClipsResult: TwitchSearchClipsResultPage = twitchClipsSearchResponse.data;
        return twitchClipsResult;

    }

    public async getSearchList(searchQuery: string, accessToken: string, limit: number, page: number) {

        const twitchClipsPage = await this.searchTwitchClipsByGame(searchQuery, accessToken, limit, null)
        const items = TwitchClipSearchResultToListItemsConverter.convert(twitchClipsPage)
        const searchList = new VideoSearchList(items, "", new TwitchClipPlayerCreator())
        return searchList

    }

}