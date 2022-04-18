import axios from "axios";
import {TwitchChannelsSearchResult, TwitchSearchResult} from "../models/ApiSearches/TwitchChannelsSearchResult";


/**
 * https://dev.twitch.tv/docs/api/reference#search-channels
 */
async function searchTwitchChannels(searchQuery: string, accessToken: string, limit: number, page: string | null) {

    const twitchClientId = process.env.REACT_APP_TWITCH_CLIENT_ID;

    let url = "https://api.twitch.tv/helix/search/channels"
        + "?query=" + searchQuery
        + "&first=" + limit
    if (page) {
        url += "&after=" + page;
    }

    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + accessToken,
    }
    if (twitchClientId) {
        axios.defaults.headers.common['Client-Id'] = twitchClientId;
    } else {throw new Error("Twitch client ID not set in the environment variables.")}

    const options = {
        method: 'GET',
        headers: headers,
        url: url,
    };

    // @ts-ignore
    let twitchChannelsSearchResponse = await axios(options);
    let twitchChannelsSearchResult: TwitchChannelsSearchResult = twitchChannelsSearchResponse.data;
    return twitchChannelsSearchResult;

}

/**
 * https://dev.twitch.tv/docs/api/reference#get-clips
 */
export async function searchTwitchClipsByBroadcasterId(searchQuery: string, accessToken: string, limit: number, page: string | null) {

    let twitchChannelId = await searchTwitchChannels(searchQuery, accessToken, limit, page);

    const twitchClientId = process.env.REACT_APP_TWITCH_CLIENT_ID;

    let url = "https://api.twitch.tv/helix/clips"
        + "?broadcaster_id=" + twitchChannelId.data[0].id
        + "&first=" + limit
    if (page) {
        url += "&after=" + page;
    }

    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + accessToken,
    }
    if (twitchClientId) {
        axios.defaults.headers.common['Client-Id'] = twitchClientId;
    } else {throw new Error("Twitch client ID not set in the environment variables.")}

    const options = {
        method: 'GET',
        headers: headers,
        url: url,
    };

    // @ts-ignore
    let twitchClipsSearchResponse = await axios(options);
    let twitchClipsResult: TwitchSearchResult = twitchClipsSearchResponse.data;
    return twitchClipsResult;

}