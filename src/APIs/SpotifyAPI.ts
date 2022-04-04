import SpotifyApi from 'spotify-web-api-js'

export default class SpotifyAPI {

    private static spotifyApiInstance: SpotifyApi.SpotifyWebApiJs;

    private constructor() {
    }

    public static getSpotifyApiInstance() {

        if (this.spotifyApiInstance === undefined) {
            this.spotifyApiInstance = new SpotifyApi();
        }

        return this.spotifyApiInstance;
    }

}