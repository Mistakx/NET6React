import {ApiSearch} from "./ApiSearch";
import axios from "axios";
import {YouTubeVideoSearchResultPage} from "../../models/apiSearches/YouTubeSearchResult";
import {Platform} from "../../models/apiSearches/PlatformSearches";
import {MultiPlatformPlayerCreator} from "../../playerCreators/MultiPlatformPlayerCreator";
import {YouTubeVideoResultPageToListItemsConverter} from "../converters/YouTubeVideoResultPageToListItemsConverter";
import {VideoSearchList} from "../../searchLists/VideoSearchList";

export class YouTubeSearchVideoByGeneral extends ApiSearch {

    private static youtubeSearchByGeneral: YouTubeSearchVideoByGeneral

    private constructor() {
        super()
    }

    public static getInstance() {
        if (!YouTubeSearchVideoByGeneral.youtubeSearchByGeneral) {
            YouTubeSearchVideoByGeneral.youtubeSearchByGeneral = new YouTubeSearchVideoByGeneral()
        }
        return YouTubeSearchVideoByGeneral.youtubeSearchByGeneral
    }

    public getPlatform(): Platform {
        return "YouTube";
    }

    public getButtonText() {
        return "YouTube";
    }

    /**
     * https://developers.google.com/youtube/v3/docs/search/list
     */
    public async searchYouTubeVideos(searchQuery: string, limit: number, page: string | null) {

        let url = "https://youtube.googleapis.com/youtube/v3/search"
            + "?part=snippet"
            + "&maxResults=" + limit
            + "&q=" + searchQuery
            + "&type=video"
            + "&key=" + process.env.REACT_APP_YOUTUBE_MILTON_API_KEY
        if (page) {
            url += "&pageToken=" + page;
        }

        const options = {
            method: 'GET',
            url,
        };

        // @ts-ignore
        let youtubeResponse = await axios(options);
        let youtubeSearchResult: YouTubeVideoSearchResultPage = youtubeResponse.data;
        return youtubeSearchResult;

    }

    public async getSearchList(searchQuery: string, accessToken: string, limit: number, page: number) {

        const youtubeVideoResultPage = await this.searchYouTubeVideos(searchQuery, limit, null)
        const items = YouTubeVideoResultPageToListItemsConverter.convert(youtubeVideoResultPage)
        const searchList = new VideoSearchList(items, "https://www.youtube.com/watch?v=", new MultiPlatformPlayerCreator())
        return searchList

    }

}