import {SpecificSearch} from "./SpecificSearch";
import axios from "axios";
import {SpotifySearchTracksResult} from "../models/ApiSearches/SpotifySearchResults";
import {SpecificSearchType} from "../models/ApiSearches/PlatformSearches";

export class SpotifySearchTrackByName extends SpecificSearch {

    private static spotifySearchTrackByName: SpotifySearchTrackByName;

    private constructor() {
        super();
    }

    public static getInstance() {
        if (!SpotifySearchTrackByName.spotifySearchTrackByName) {
            SpotifySearchTrackByName.spotifySearchTrackByName = new SpotifySearchTrackByName();
        }
        return SpotifySearchTrackByName.spotifySearchTrackByName;
    }


    public getType(): SpecificSearchType {
        return "SpotifySearchTrackByName"
    }

    public getButtonText() {
        return "Spotify (Track)";
    }


    /**
     * https://developer.spotify.com/documentation/web-api/reference/#/operations/search
     */
    public async searchSpotifyTracksByName(query: string, accessToken: string, limit: number, page: number = 1) {

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

    public async defaultSearch(query: string, accessToken: string, limit: number, page: number) {
        return await this.searchSpotifyTracksByName(query, accessToken, limit, page)
    }



}