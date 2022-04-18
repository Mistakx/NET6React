export interface AccessTokensState {

    spotifyAccessToken: string | null;
    setSpotifyAccessToken: (spotifyAccessToken: string) => void;

    twitchAccessToken: string | null;
    setTwitchAccessToken: (twitchAccessToken: string) => void;

}
