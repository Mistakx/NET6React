import {SearchContent, Track} from "spotify-types";
import {Paging} from "spotify-types/typings/global";

// https://developer.spotify.com/documentation/web-api/reference/#/operations/search

export interface SpotifySearchResult {
    tracks: Paging<Track>;
}

export interface SpotifyTrack extends Track {

}
