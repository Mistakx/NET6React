import {ApiSearch} from "./ApiSearch";
import axios from "axios";
import {SpotifySearchAlbumsResult, SpotifyTracksPage} from "../../models/apiSearches/SpotifySearchResults";
import {SimplifiedAlbum} from "spotify-types";
import {Platform} from "../../models/apiSearches/PlatformSearches";
import {SpotifyPlayerCreator} from "../../playerCreators/SpotifyPlayerCreator";
import {SpotifyTracksPageToListItemsConverter} from "../converters/SpotifyTracksPageToListItemsConverter";
import {TrackSearchList} from "../../searchLists/TrackSearchList";
import {VideoSearchList} from "../../searchLists/VideoSearchList";
import {LivestreamSearchList} from "../../searchLists/LivestreamSearchList";

export class SpotifySearchTrackByAlbum extends ApiSearch {

    private static spotifySearchTrackByAlbumInstance: ApiSearch

    private constructor() {
        super();
    }

    static getInstance() {

        if (!SpotifySearchTrackByAlbum.spotifySearchTrackByAlbumInstance) {
            SpotifySearchTrackByAlbum.spotifySearchTrackByAlbumInstance = new SpotifySearchTrackByAlbum();
        }
        return SpotifySearchTrackByAlbum.spotifySearchTrackByAlbumInstance

    }

    public getPlatform(): Platform {
        return "Spotify";
    }

    public getButtonText() {
        return "Spotify (Album)";
    }

    /**
     * https://developer.spotify.com/documentation/web-api/reference/#/operations/search
     */
    private async searchSpotifyAlbums(searchQuery: string, accessToken: string, limit: number, page: number) {

        const url = "https://api.spotify.com/v1/search"
            + "?q=" + searchQuery
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
    private async searchSpotifyTracksByAlbum(searchQuery: string, accessToken: string, limit: number, page: number) {

        let spotifyAlbums = await this.searchSpotifyAlbums(searchQuery, accessToken, limit, page);

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
            url: url,
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

    public async getSearchList(searchQuery: string, page: number, limit: number, accessToken: string): Promise<VideoSearchList | TrackSearchList | LivestreamSearchList> {

        const spotifyTracksPage = await this.searchSpotifyTracksByAlbum(searchQuery, accessToken, limit, page)
        const items = SpotifyTracksPageToListItemsConverter.convert(spotifyTracksPage)
        const searchList = new TrackSearchList(items, new SpotifyPlayerCreator(super.getSearchListPlayerWidth(), super.getSearchListPlayerHeight()))

        return searchList

    }

}