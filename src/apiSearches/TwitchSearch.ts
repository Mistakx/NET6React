import axios from "axios";
import base64 from "base-64";
import {VimeoSearch} from "../models/ApiRequests/VimeoSearch";


/**
 * https://developer.vimeo.com/api/reference/videos#search_videos
 */
async function searchTwitchChannels(searchQuery: string, accessToken: string, limit: number = 20, page: number = 1)  {

    const twitchClientId = process.env.REACT_APP_TWITCH_CLIENT_ID;
    const twitchClientSecret = process.env.REACT_APP_TWITCH_CLIENT_SECRET;

    const url = "https://api.twitch.tv/helix/search/channels"
        + "?query=" + searchQuery
        + "&first=" + limit
        + "&after=" + page;

    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + accessToken,
        'Client-Id:': twitchClientId

    }
    const options = {
        method: 'GET',
        headers: headers,
        url,
    };

    // @ts-ignore
    let vimeoSearchResponse = await axios(options);
    let vimeoSearchResults: VimeoSearch = vimeoSearchResponse.data;
    return vimeoSearchResults;


}

export default searchTwitchChannels;