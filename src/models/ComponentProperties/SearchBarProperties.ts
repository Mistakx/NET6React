import {MutableRefObject} from "react";

export interface SearchBarProperties {
    spotifyAccessToken:  MutableRefObject<string>
    twitchAccessToken:  MutableRefObject<string>
}