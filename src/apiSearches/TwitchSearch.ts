import axios from "axios";
import base64 from "base-64";
import {VimeoSearchResult} from "../models/ApiSearches/VimeoSearchResult";
import {TwitchSearchResult} from "../models/ApiSearches/TwitchSearchResult";


/**
 * https://developer.vimeo.com/api/reference/videos#search_videos
 */
async function searchTwitchChannels(searchQuery: string, accessToken: string, limit: number = 20, page: number = 1)  {

    const twitchClientId = process.env.REACT_APP_TWITCH_CLIENT_ID;

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
    let twitchSearchResponse = await axios(options);
    let twitchSearchResult: TwitchSearchResult = twitchSearchResponse.data;
    return twitchSearchResult;


}

/**
 * https://dev.twitch.tv/docs/api/reference#get-clips
 */
async function searchTwitchClips(searchQuery: string, accessToken: string, limit: number = 20, page: number = 1)  {

    const twitchClientId = process.env.REACT_APP_TWITCH_CLIENT_ID;
    const twitchClientSecret = process.env.REACT_APP_TWITCH_CLIENT_SECRET;

    const url = "'https://api.twitch.tv/helix/clips?id=AwkwardHelplessSalamanderSwiftRage'"
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
    let vimeoSearchResults: VimeoSearchResult = vimeoSearchResponse.data;
    return vimeoSearchResults;


}

export default searchTwitchChannels;