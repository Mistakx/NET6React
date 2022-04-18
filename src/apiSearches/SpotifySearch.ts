import axios from "axios";
import {SpotifySearchResult} from "../models/ApiSearches/SpotifySearchResult";

/**
 * https://developer.spotify.com/documentation/web-api/reference/#/operations/search
 */
async function searchSpotifyTracks(query: string, accessToken: string, limit: number = 20, page: number = 1) {

    const url = "https://api.spotify.com/v1/search"
        + "?q=" + query
        + "&type=track"
        + "&limit=" + limit
        + "&offset=" + (page - 1) * limit;
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
    }
    const options = {
        method: 'GET',
        headers: headers,
        url,
    };

    // @ts-ignore
    let spotifyTracksResponse = await axios(options);
    let spotifyTracks: SpotifySearchResult = spotifyTracksResponse.data;
    return spotifyTracks;

}

export default searchSpotifyTracks