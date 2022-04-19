import {SearchResult} from "../ApiSearches/PlatformSearches";

export interface PlayerState {

    playingType: SearchResult | null
    setPlayingType: (playingType: SearchResult) => void;

    playingId: string | null
    setPlayingId: (playingId: string) => void;

}
