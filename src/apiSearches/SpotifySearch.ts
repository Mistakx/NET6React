import axios from "axios";
import {SearchContent} from "spotify-types";
import qs from "qs";

async function searchSpotifyTracks(query: string, accessToken: string, limit: number = 20) {

    const url = "https://api.spotify.com/v1/search" + "?q=" + query + "&type=track" + "&limit=" + limit
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
    let spotifyTracks: SearchContent = spotifyTracksResponse.data;
    return spotifyTracks;


}

export default searchSpotifyTracks