import axios from "axios";
import {YouTubeSearchResult} from "../models/ApiSearches/YouTubeSearchResult";

/**
 * https://developers.google.com/youtube/v3/docs/search/list
 */
async function searchYouTubeVideos(query: string, limit: number = 20, page: string | null) {

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
    let youtubeSearchResult: YouTubeSearchResult  = youtubeResponse.data;
    return youtubeSearchResult;


}

export default searchYouTubeVideos