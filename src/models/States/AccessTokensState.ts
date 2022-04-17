import {Platform} from "../Platform";
import {SearchContent} from "spotify-types";
import {Video} from "youtube-api-search-typed/dist";
import {VimeoSearch} from "../ApiRequests/VimeoSearch";

export interface AccessTokensState {

    spotifyAccessToken: string | null;
    setSpotifyAccessToken: (spotifyAccessToken: string) => void;

    twitchAccessToken: string | null;
    setTwitchAccessToken: (twitchAccessToken: string) => void;

}
