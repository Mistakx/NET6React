import {Platform} from "./Platform";

export interface PlayerState {

    playingPlatform: Platform | null
    setPlayingPlatform: (playingPlatform: Platform) => void;

    playingId: string | null
    setPlayingId: (playingId: string) => void;

}
