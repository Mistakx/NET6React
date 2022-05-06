import {ApiSearch} from "./ApiSearch";
import axios from "axios";
import async from 'async';

import {
    YouTubeVideoDetails,
    YouTubeVideoDetailsSearchResultPage,
    YouTubeVideoSearchResultPage
} from "../../models/apiSearches/YouTubeSearchResult";
import {Platform} from "../platforms/Platform";
import {MultiPlatformPlayerCreator} from "../../playerCreators/MultiPlatformPlayerCreator";
import {YouTubeVideoResultPageToListItemsConverter} from "../converters/YouTubeVideoResultPageToListItemsConverter";
import {VideoSearchList} from "../../searchLists/VideoSearchList";
import {TrackSearchList} from "../../searchLists/TrackSearchList";
import {LivestreamSearchList} from "../../searchLists/LivestreamSearchList";
import YouTube from '../platforms/YouTube';

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
        return new YouTube();
    }

    public getButtonText() {
        return "YouTube";
    }

    /**
     * https://developers.google.com/youtube/v3/docs/videos/list
     */
    public async searchYouTubeVideoDetails(videoId: string) {

        let url = "https://youtube.googleapis.com/youtube/v3/videos"
            + "?part=contentDetails,statistics"
            + "&id=" + videoId
            + "&key=" + process.env.REACT_APP_YOUTUBE_API_KEY

        const options = {
            method: 'GET',
            url: url,
        };

        try {
            // @ts-ignore
            let youtubeResponse = await axios(options);
            let youtubeSearchResult: YouTubeVideoDetailsSearchResultPage = youtubeResponse.data;
            return youtubeSearchResult;
        } catch (e) {
            alert("YouTube Video Details Search - " + e)
        }
        return {} as YouTubeVideoDetailsSearchResultPage


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
            + "&key=" + process.env.REACT_APP_YOUTUBE_API_KEY
        if (page) {
            url += "&pageToken=" + page;
        }

        const options = {
            method: 'GET',
            url: url,
        };

        try {
            // @ts-ignore
            let youtubeResponse = await axios(options);
            let youtubeSearchResult: YouTubeVideoSearchResultPage = youtubeResponse.data;

            // await async.forEach(youtubeSearchResult.items, async (item) => {
            //     console.log("YouTube Video Search - " + item.snippet.title)
            //     let videoDetails = await this.searchYouTubeVideoDetails(item.id.videoId)
            //     item.details = {...videoDetails}
            // })

            return youtubeSearchResult;


        } catch (e) {
            alert("YouTube Search - " + e)
        }
        return {} as YouTubeVideoSearchResultPage


    }

    public async getSearchList(searchQuery: string, page: number, limit: number): Promise<VideoSearchList | TrackSearchList | LivestreamSearchList> {

        const youtubeVideoResultPage = await this.searchYouTubeVideos(searchQuery, limit, null)
        const items = YouTubeVideoResultPageToListItemsConverter.convert(youtubeVideoResultPage)
        const searchList = new VideoSearchList(items, new MultiPlatformPlayerCreator("https://www.youtube.com/watch?v="))
        return searchList

    }

}