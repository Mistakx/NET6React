import {Track} from "spotify-types";
import React from "react";
import {Platform} from "./Platform";

export interface SpotifyTrackProperties {
    track: Track;
    setPlayingPlatform: React.Dispatch<React.SetStateAction<Platform | undefined>>
    setPlayingId: React.Dispatch<React.SetStateAction<string | undefined>>
}