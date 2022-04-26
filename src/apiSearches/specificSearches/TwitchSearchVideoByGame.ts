import {ApiSearch} from "./ApiSearch";
import axios from "axios";
import {TwitchSearchVideoResultPage} from "../../models/apiSearches/TwitchSearchResults";
import {Platform} from "../../models/apiSearches/PlatformSearches";
import {TwitchGamesSearch} from "../auxiliarySearches/TwitchGameSearch";
import {TwitchVideoSearchResultToListItemsConverter} from "../converters/TwitchVideoSearchResultToListItemsConverter";
import {MultiPlatformPlayerCreator} from "../../playerCreators/MultiPlatformPlayerCreator";
import {VideoSearchList} from "../../searchLists/VideoSearchList";
import {TrackSearchList} from "../../searchLists/TrackSearchList";
import {LivestreamSearchList} from "../../searchLists/LivestreamSearchList";

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
        return "Twitch";
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
            withCredentials: false,
            url: url,
        };

        try {
            // @ts-ignore
            let twitchVideosSearchResponse = await axios(options);
            let twitchVideosResult: TwitchSearchVideoResultPage = twitchVideosSearchResponse.data;
            return twitchVideosResult;
        } catch (e) {
            alert(e)
        }
        return {} as TwitchSearchVideoResultPage;
    }

    public async getSearchList(searchQuery: string, page: number, limit: number, accessToken: string): Promise<VideoSearchList | TrackSearchList | LivestreamSearchList> {

        const twitchVideoPageResult = await this.searchTwitchVideosByGame(searchQuery, "week", "trending", accessToken, limit, null)
        const items = TwitchVideoSearchResultToListItemsConverter.convert(twitchVideoPageResult)
        const searchList = new VideoSearchList(items, new MultiPlatformPlayerCreator(super.getSearchListPlayerWidth(), super.getSearchListPlayerHeight(), "https://www.twitch.tv/videos/"))
        return searchList

    }

}