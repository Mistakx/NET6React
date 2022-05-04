import {ApiSearch} from "./ApiSearch";
import axios from "axios";
import {TwitchSearchClipsResultPage} from "../../models/apiSearches/TwitchSearchResults";
import {Platform} from "../platforms/Platform";
import {TwitchGamesSearch} from "../auxiliarySearches/TwitchGameSearch";
import {TwitchClipSearchResultToListItemsConverter} from "../converters/TwitchClipSearchResultToListItemsConverter";
import {TwitchClipPlayerCreator} from "../../playerCreators/TwitchClipPlayerCreator";
import {VideoSearchList} from "../../searchLists/VideoSearchList";
import {TrackSearchList} from "../../searchLists/TrackSearchList";
import {LivestreamSearchList} from "../../searchLists/LivestreamSearchList";
import Twitch from '../platforms/Twitch';

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
        return new Twitch();
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

    public async getSearchList(searchQuery: string, page: number, limit: number, accessToken: string): Promise<VideoSearchList | TrackSearchList | LivestreamSearchList> {

        const twitchClipsPage = await this.searchTwitchClipsByGame(searchQuery, accessToken, limit, null)
        const items = TwitchClipSearchResultToListItemsConverter.convert(twitchClipsPage)
        const searchList = new VideoSearchList(items, new TwitchClipPlayerCreator())
        return searchList

    }

}