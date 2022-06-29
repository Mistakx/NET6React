import {ApiSearch} from "./ApiSearch";
import axios from "axios";
import {
    SpotifySearchPodcastsResult,
    SpotifySearchTracksResult
} from "../../../models/apiResponses/SpotifySearchResults";
import {Platform} from "../platforms/Platform";
import Spotify from '../platforms/Spotify';
import {SpotifyPodcastsPageToListItemsConverter} from "../converters/SpotifyPodcastsPageToListItemsConverter";
import {MixcloudTracksPageToListItemsConverter} from "../converters/MixcloudTracksPageToListItemsConverter";

export class SpotifySearchPodcastsByName extends ApiSearch {

    private static spotifySearchPodcastsByNameInstance: ApiSearch

    private constructor() {
        super();
    }

    static getInstance() {

        if (!SpotifySearchPodcastsByName.spotifySearchPodcastsByNameInstance) {
            SpotifySearchPodcastsByName.spotifySearchPodcastsByNameInstance = new SpotifySearchPodcastsByName();
        }
        return SpotifySearchPodcastsByName.spotifySearchPodcastsByNameInstance

    }

    public getPlatform(): Platform {
        return new Spotify();
    }

    public getButtonText() {
        return "Spotify (Podcasts)";
    }

    /**
     * https://developer.spotify.com/documentation/web-api/reference/#/operations/search
     */
    private async searchSpotifyPodcastsByName(searchQuery: string, accessToken: string, limit: number, page: number) {

        const url = "https://api.spotify.com/v1/search"
            + "?q=" + searchQuery
            + "&type=episode&market=PT"
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


        //@ts-ignore
        let spotifyPodcastsResponse = await axios(options);
        let spotifyPodcasts: SpotifySearchPodcastsResult = spotifyPodcastsResponse.data;
        return spotifyPodcasts
        
    }

    public async getSearchResults(searchQuery: string, page: number, limit: number, accessToken: string) {

        const spotifyPodcastsPage = await this.searchSpotifyPodcastsByName(searchQuery, accessToken, limit, page)
        return SpotifyPodcastsPageToListItemsConverter.convert(spotifyPodcastsPage.episodes.items)
        
        
    }

}