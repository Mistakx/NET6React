// noinspection JSUnusedLocalSymbols

import SpotifyApi from 'spotify-web-api-js'

export default class SpotifyAPI {

    private static spotifyApiInstance: SpotifyApi.SpotifyWebApiJs;
    private static spotifyApiClientId = process.env.REACT_APP_CLIENT_ID;
    private static spotifyApiClientSecret = process.env.REACT_APP_CLIENT_SECRET;
    
    private constructor() {
    }

    public static getSpotifyApiInstance() {

        if (this.spotifyApiInstance === undefined) {
            this.spotifyApiInstance = new SpotifyApi();
        }

        return this.spotifyApiInstance;
    }

    public static getSpotifyApiClientSecret() {
        return this.spotifyApiClientSecret;
    }

    public static getSpotifyApiClientId() {
        return this.spotifyApiClientId;
    }

}