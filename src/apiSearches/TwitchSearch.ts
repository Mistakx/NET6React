import axios from "axios";
import {
    TwitchSearchCategoryResult,
    TwitchSearchChannelResult,
    TwitchSearchClipResult
} from "../models/ApiSearches/TwitchSearchResults";

/**
 * https://dev.twitch.tv/docs/api/reference#search-channels
 */
export async function searchTwitchChannels(searchQuery: string, accessToken: string, limit: number, page: string | null, live_only: boolean) {

    const twitchClientId = process.env.REACT_APP_TWITCH_CLIENT_ID;

    let url = "https://api.twitch.tv/helix/search/channels"
        + "?query=" + searchQuery
        + "&first=" + limit
        + "&live_only=" + live_only;

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
        url: url,
    };

    // @ts-ignore
    let twitchChannelsSearchResponse = await axios(options);
    let twitchChannelsSearchResult: TwitchSearchChannelResult = twitchChannelsSearchResponse.data;
    return twitchChannelsSearchResult;

}

/**
 * https://dev.twitch.tv/docs/api/reference#get-clips
 */
export async function searchTwitchClipsByChannel(searchQuery: string, accessToken: string, limit: number, page: string | null) {

    let twitchChannels = await searchTwitchChannels(searchQuery, accessToken, limit, page, false);

    const twitchClientId = process.env.REACT_APP_TWITCH_CLIENT_ID;

    let url = "https://api.twitch.tv/helix/clips"
        + "?broadcaster_id=" + twitchChannels.data[0].id
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
    } else {
        throw new Error("Twitch client ID not set in the environment variables.")
    }

    const options = {
        method: 'GET',
        headers: headers,
        url: url,
    };

    // @ts-ignore
    let twitchClipsSearchResponse = await axios(options);
    let twitchClipsResult: TwitchSearchClipResult = twitchClipsSearchResponse.data;
    return twitchClipsResult;

}

/**
 * https://dev.twitch.tv/docs/api/reference#get-videos
 */
export async function searchTwitchVideosByChannel(searchQuery: string, period: "all" | "day" | "week" | "month", sort: "trending" | "views" | "time", accessToken: string, limit: number, page: string | null) {

    let twitchChannels = await searchTwitchChannels(searchQuery, accessToken, limit, page, false);

    const twitchClientId = process.env.REACT_APP_TWITCH_CLIENT_ID;

    let url = "https://api.twitch.tv/helix/videos"
        + "?user_id=" + twitchChannels.data[0].id
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
        url: url,
    };

    // @ts-ignore
    let twitchClipsSearchResponse = await axios(options);
    let twitchClipsResult: TwitchSearchClipResult = twitchClipsSearchResponse.data;
    return twitchClipsResult;

}

/**
 * https://dev.twitch.tv/docs/api/reference#search-categories
 */
async function searchTwitchGames(searchQuery: string, accessToken: string, limit: number, page: string | null) {

    const twitchClientId = process.env.REACT_APP_TWITCH_CLIENT_ID;

    let url = "https://api.twitch.tv/helix/search/categories"
        + "?query=" + encodeURIComponent(searchQuery)
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
    } else {
        throw new Error("Twitch client ID not set in the environment variables.")
    }

    const options = {
        method: 'GET',
        headers: headers,
        url: url,
    };

    // @ts-ignore
    let twitchChannelsSearchResponse = await axios(options);
    let twitchChannelsSearchResult: TwitchSearchCategoryResult = twitchChannelsSearchResponse.data;
    return twitchChannelsSearchResult;

}

/**
 * https://dev.twitch.tv/docs/api/reference#get-clips
 */
export async function searchTwitchClipsByGame(searchQuery: string, accessToken: string, limit: number, page: string | null) {

    let twitchGames = await searchTwitchGames(searchQuery, accessToken, limit, page);

    const twitchClientId = process.env.REACT_APP_TWITCH_CLIENT_ID;

    let url = "https://api.twitch.tv/helix/clips"
        + "?game_id=" + twitchGames.data[0].id
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
    } else {
        throw new Error("Twitch client ID not set in the environment variables.")
    }

    const options = {
        method: 'GET',
        headers: headers,
        url: url,
    };

    // @ts-ignore
    let twitchClipsSearchResponse = await axios(options);
    let twitchClipsResult: TwitchSearchClipResult = twitchClipsSearchResponse.data;
    return twitchClipsResult;

}

/**
 * https://dev.twitch.tv/docs/api/reference#get-videos
 */
export async function searchTwitchVideosByGame(searchQuery: string, period: "all" | "day" | "week" | "month", sort: "trending" | "views" | "time", accessToken: string, limit: number, page: string | null) {

    let twitchGames = await searchTwitchGames(searchQuery, accessToken, limit, page);

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
        url: url,
    };

    // @ts-ignore
    let twitchClipsSearchResponse = await axios(options);
    let twitchClipsResult: TwitchSearchClipResult = twitchClipsSearchResponse.data;
    return twitchClipsResult;

}