import axios from "axios";
import {Video} from "youtube-api-search-typed/dist";

async function searchYouTubeVideos(query: string, limit: number = 20) {

    const url = "https://youtube.googleapis.com/youtube/v3/search"
        + "?part=snippet"
        + "&maxResults=" + limit
        + "&q=" + query
        + "&type=video"
        + "&key=" + process.env.REACT_APP_YOUTUBE_API_KEY

    const options = {
        method: 'GET',
        url,
    };

    // @ts-ignore
    let youtubeVideosResponse = await axios(options);
    let youtubeVideos: Video[] = youtubeVideosResponse.data.items;
    return youtubeVideos;


}

export default searchYouTubeVideos