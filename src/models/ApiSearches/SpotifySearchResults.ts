import {Album, Track} from "spotify-types";
import {Paging} from "spotify-types/typings/global";

// https://developer.spotify.com/documentation/web-api/reference/#/operations/search
export interface SpotifySearchTracksResult {
    tracks: SpotifyTracksPage;
}

// https://developer.spotify.com/documentation/web-api/reference/#/operations/search
// https://developer.spotify.com/documentation/web-api/reference/#/operations/get-an-albums-tracks
export interface SpotifyTracksPage extends Paging<Track> {
}

// https://developer.spotify.com/documentation/web-api/reference/#/operations/search
export interface SpotifySearchAlbumsResult {
    albums: Paging<Album>;
}

export interface SpotifyTrack extends Track {

}
