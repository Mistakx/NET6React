import axios from "axios";
import base64 from "base-64";
import {VimeoSearchVideoResult} from "../models/ApiSearches/VimeoSearchResult";

/**
 * https://developer.vimeo.com/api/reference/videos#search_videos
 */
async function searchVimeoVideos(searchQuery: string, limit: number = 20, page: number = 1)  {

    const vimeoClientId = process.env.REACT_APP_VIMEO_CLIENT_ID;
    const vimeoClientSecret = process.env.REACT_APP_VIMEO_CLIENT_SECRET;

    const url = "https://api.vimeo.com/videos"
        + "?query=" + searchQuery
        + "&page=" + page
        + "&per_page=" + limit

    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + base64.encode(vimeoClientId + ':' + vimeoClientSecret)
    }
    const options = {
        method: 'GET',
        headers: headers,
        url,
    };

    // @ts-ignore
    let vimeoSearchResponse = await axios(options);
    let vimeoSearchResults: VimeoSearchVideoResult = vimeoSearchResponse.data;
    return vimeoSearchResults;


}

export default searchVimeoVideos;