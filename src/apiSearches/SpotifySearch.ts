import axios from "axios";
import {
    SpotifySearchAlbumsResult, SpotifySearchTracksResult,
    SpotifyTracksPage
} from "../models/ApiSearches/SpotifySearchResults";
import spotifyTrack from "../components/SearchResults/SpotifyTrack";
import {SimplifiedAlbum} from "spotify-types";

/**
 * https://developer.spotify.com/documentation/web-api/reference/#/operations/search
 */
export async function searchSpotifyTracksByName(query: string, accessToken: string, limit: number, page: number = 1) {

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
    let spotifyTracks: SpotifySearchTracksResult = spotifyTracksResponse.data;
    return spotifyTracks.tracks;

}

/**
 * https://developer.spotify.com/documentation/web-api/reference/#/operations/search
 */
async function searchSpotifyAlbums(query: string, accessToken: string, limit: number, page: number = 1) {

    const url = "https://api.spotify.com/v1/search"
        + "?q=" + query
        + "&type=album"
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
    let spotifyAlbumsResponse = await axios(options);
    let spotifyAlbums: SpotifySearchAlbumsResult = spotifyAlbumsResponse.data;
    return spotifyAlbums;

}

/**
 * https://developer.spotify.com/documentation/web-api/reference/#/operations/get-an-albums-tracks
 */
export async function searchSpotifyTracksByAlbum(query: string, accessToken: string, limit: number, page: number = 1) {

    let spotifyAlbums = await searchSpotifyAlbums(query, accessToken, limit, page);

    const url = "https://api.spotify.com/v1/albums/" + spotifyAlbums.albums.items[0].id + "/tracks"
        + "?limit=" + limit
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
    let spotifyTracks: SpotifyTracksPage = spotifyTracksResponse.data;

    // This API endpoint used doesn't return results that match the SpotifyTracksPage interface exactly.
    // The album name doesn't come in the response, so we need to attach it.
    for (let track of spotifyTracks.items) {
        track.album = {} as SimplifiedAlbum
        track.album.name = spotifyAlbums.albums.items[0].name
        track.album.images = []
        track.album.images.push(spotifyAlbums.albums.items[0].images[0])

    }

    return spotifyTracks;

}

