import {PlayerCreator} from "../../playerCreators/PlayerCreator";

export interface PlayerState {

    playingId: string | null
    setPlayingId: (playingId: string | null) => void
    playingThumbnailUrl: string | null
    setPlayingThumbnailUrl: (playingThumbnailUrl: string | null) => void
    playerCreator: PlayerCreator | null
    setPlayerCreator: (playerCreator: PlayerCreator | null) => void

}
