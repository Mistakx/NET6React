import {SpecificSearch} from "./SpecificSearch";
import axios from "axios";
import {YouTubeSearchVideoResult} from "../models/ApiSearches/YouTubeSearchResult";

export class YouTubeSearchByGeneral extends SpecificSearch {

    private static youtubeSearchByGeneral: YouTubeSearchByGeneral

    private constructor() {
        super()
    }

    public static getInstance() {
        if (!YouTubeSearchByGeneral.youtubeSearchByGeneral) {
            YouTubeSearchByGeneral.youtubeSearchByGeneral = new YouTubeSearchByGeneral()
        }
        return YouTubeSearchByGeneral.youtubeSearchByGeneral
    }

    public getType() {
        return "YouTubeSearchByGeneral"
    }

    public getButtonText() {
        return "YouTube";
    }

    /**
     * https://developers.google.com/youtube/v3/docs/search/list
     */
    public async searchYouTubeVideos(query: string, limit: number, page: string | null) {

        let url = "https://youtube.googleapis.com/youtube/v3/search"
            + "?part=snippet"
            + "&maxResults=" + limit
            + "&q=" + query
            + "&type=video"
            + "&key=" + process.env.REACT_APP_YOUTUBE_API_KEY
        if (page) {
            url += "&pageToken=" + page;
        }

        const options = {
            method: 'GET',
            url,
        };

        // @ts-ignore
        let youtubeResponse = await axios(options);
        let youtubeSearchResult: YouTubeSearchVideoResult  = youtubeResponse.data;
        return youtubeSearchResult;


    }


}