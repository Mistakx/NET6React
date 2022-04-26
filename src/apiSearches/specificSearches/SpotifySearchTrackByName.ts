import {ApiSearch} from "./ApiSearch";
import axios from "axios";
import {SpotifySearchTracksResult, SpotifyTracksPage} from "../../models/apiSearches/SpotifySearchResults";
import {Platform} from "../../models/apiSearches/PlatformSearches";
import {SpotifyTracksPageToListItemsConverter} from "../converters/SpotifyTracksPageToListItemsConverter";
import {SpotifyPlayerCreator} from "../../playerCreators/SpotifyPlayerCreator";
import {TrackSearchList} from "../../searchLists/TrackSearchList";
import {VideoSearchList} from "../../searchLists/VideoSearchList";
import {LivestreamSearchList} from "../../searchLists/LivestreamSearchList";

export class SpotifySearchTrackByName extends ApiSearch {

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

    public getPlatform(): Platform {
        return "Spotify";
    }

    public getButtonText() {
        return "Spotify (Track)";
    }

    /**
     * https://developer.spotify.com/documentation/web-api/reference/#/operations/search
     */
    public async searchSpotifyTracksByName(searchQuery: string, accessToken: string, limit: number, page: number) {

        const url = "https://api.spotify.com/v1/search"
            + "?q=" + searchQuery
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
            url: url,
            withCredentials: false
        };

        try {
            // @ts-ignore
            let spotifyTracksResponse = await axios(options);
            let spotifyTracks: SpotifySearchTracksResult = spotifyTracksResponse.data;
            return spotifyTracks.tracks;
        } catch (e) {
            alert(e)
        }
        return {} as SpotifyTracksPage

    }

    public async getSearchList(searchQuery: string, page: number, limit: number, accessToken: string): Promise<VideoSearchList | TrackSearchList | LivestreamSearchList> {

        const spotifyTracksPage = await this.searchSpotifyTracksByName(searchQuery, accessToken, limit, page);
        const items = SpotifyTracksPageToListItemsConverter.convert(spotifyTracksPage);
        const searchList = new TrackSearchList(items, new SpotifyPlayerCreator(super.getSearchListPlayerWidth(), super.getSearchListPlayerHeight()));

        return searchList;


    }

}